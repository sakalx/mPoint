import React from 'react';

import {listOfFields, listOfOperators} from 'root/static/lists';

import uuidv4 from 'root/helpers/uuidv4';

import Autocomplete from 'root/components/autocomplete';
import EnhancedHead from './enhanced-head';
import PaginationActions from './pagination-actions';
import RenderInput from 'root/components/input';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
  Cell,
  EmptySpace,
  RowTable,
  SelectOperator,
  Wrap,
} from './style';

class RuleList extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'operator',
    rules: [],
    page: 0,
    rowsPerPage: 5,
    error: false,
  };

  handleAddRule = () => {
    const {rules} = this.state;
    const notFinishedRule = rules.some(rule =>
      Object.values(rule).some(value => !value)
    );

    const newRule = {
      id: uuidv4(),
      field: '',
      operator: '',
      value: '',
    };

    notFinishedRule
      ? this.setState({error: true})
      : this.setState({
        rules: [newRule, ...rules],
        orderBy: '',
        error: false,
      });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({order, orderBy});
  };

  handleChangeField = (id, {newValue}) => {
    this.setState({rules: this._newRuleSet(id, 'field', newValue)})
  };

  handleChangeOperator = (id, {value}) => {
    this.setState({rules: this._newRuleSet(id, 'operator', value)})
  };

  handleChangeValue = id => event => {
    this.setState({rules: this._newRuleSet(id, 'value', event.target.value)})
  };

  handleRemoveRule = id => {
    const newRuleSet = this.state.rules.filter(rule => rule.id !== id);

    this.setState({rules: newRuleSet});
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  _newRuleSet = (id, key, value) => (
    this.state.rules.map(rule =>
      rule.id === id ? {...rule, [key]: value} : rule)
  );

  render() {
    const {rules, order, orderBy, rowsPerPage, page, error} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rules.length - page * rowsPerPage);

    return (
      <Collapse in={!!rules.length} timeout={{enter: 800}} mountOnEnter unmountOnExit>
        <Wrap>
          <Toolbar>
            <Typography color={error ? "error" : "default"} variant="title">
              {error ? "Need to finish previous rule" : "Rules"}
            </Typography>
          </Toolbar>
          <Table>
            <EnhancedHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {rules
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(rule => (
                    <RowTable key={rule.id} error={error.toString()} hover>
                      <Slide in={true} direction="left" mountOnEnter>
                        <Cell scope="row" style>
                          <Typography variant="subheading" color="textSecondary">
                            {rule.id}
                          </Typography>
                        </Cell>
                      </Slide>
                      <Cell>
                        <Autocomplete
                          label="request"
                          onChange={(event, obj) => this.handleChangeField(rule.id, obj, event)}
                          placeholder="Field"
                          suggestions={listOfFields}
                          value={rule.field}
                        />
                      </Cell>
                      <Cell>
                        <SelectOperator
                          label="operator"
                          list={listOfOperators}
                          onChange={obj => this.handleChangeOperator(rule.id, obj)}
                          value={rule.operator}
                        />
                      </Cell>
                      <Cell>
                        <RenderInput
                          label="value"
                          onChange={this.handleChangeValue(rule.id)}
                          value={rule.value}
                        />
                      </Cell>
                      <TableCell>
                        <Button
                          aria-label="Delete-on-of-rule"
                          color="secondary"
                          onClick={() => this.handleRemoveRule(rule.id)}
                          size="small"
                        >
                          <DeleteIcon/>
                          Delete
                        </Button>
                      </TableCell>
                    </RowTable>
                  )
                )}
              {emptyRows > 0 && (
                <EmptySpace empty-rows={emptyRows}>
                  <TableCell colSpan={5}/>
                </EmptySpace>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={5}
                  count={rules.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={PaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Wrap>
      </Collapse>
    );
  }
}

function getSorting(order, orderBy) {
  if (orderBy) {
    return order === 'desc'
      ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  }
}

export default RuleList;