import React from 'react';

import {listOfFields, listOfOperators} from 'root/static/lists-fake-data';

import uuidv4 from 'root/helpers/uuidv4';

import PaginationActions from './pagination-actions';
import Autocomplete from 'root/components/autocomplete';
import RenderSelect from 'root/components/select';

import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import {
  Head,
  RowTable,
  Wrap,
} from './style';

class RuleList extends React.Component {
  state = {
    rules: [{id: "11-ds", field: "app.bundlee", operator: "gte", value: "usa"}],
    page: 0,
    rowsPerPage: 5,
  };

  handleAddRule = () => {
    const {rules} = this.state;
    const newRule = {
      id: uuidv4(),
      field: '',
      operator: '',
      value: '',
    };

    this.setState({rules: [newRule, ...rules]});
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
    const {rules, rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rules.length - page * rowsPerPage);

    return (
      <Collapse in={!!rules.length} timeout={{enter: 800}} mountOnEnter unmountOnExit>
        <Wrap>
          <Table>
            <Head>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>Field</TableCell>
                <TableCell>Operator</TableCell>
                <TableCell>Value</TableCell>
                <TableCell/>
              </TableRow>
            </Head>
            <TableBody>
              {rules.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(rule => {
                return (
                  <RowTable key={rule.id}>
                    <Slide in={true} direction="left" mountOnEnter>
                      <TableCell scope="row">
                        <Typography variant="subheading" color="textSecondary">
                          {rule.id}
                        </Typography>
                      </TableCell>
                    </Slide>
                    <TableCell style={{position: 'relative'}}>
                      <Autocomplete
                        label="request"
                        onChange={(event, obj) => this.handleChangeField(rule.id, obj, event)}
                        placeholder="Field"
                        suggestions={listOfFields}
                        value={rule.field}
                      />
                    </TableCell>
                    <TableCell>
                      <RenderSelect
                        list={listOfOperators}
                        onChange={obj => this.handleChangeOperator(rule.id, obj)}
                        value={rule.operator}
                        placeholder="Operator"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={this.handleChangeValue(rule.id)}
                        value={rule.value}
                        placeholder="Value"
                      />
                    </TableCell>
                    <TableCell numeric>
                      <Tooltip title="Remove rule" placement="left">
                        <IconButton
                          aria-label="Delete-on-of-rule"
                          color="secondary"
                          onClick={() => this.handleRemoveRule(rule.id)}
                        >
                          <DeleteIcon/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </RowTable>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{height: 48 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
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


export default RuleList;