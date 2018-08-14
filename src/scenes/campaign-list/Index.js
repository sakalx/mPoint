import React from 'react';

import {listOfCampaignDummy} from 'root/static/lists';

import getSorting from 'root/helpers/sorting';

import EnhancedHead from 'root/components/table/enhanced-head';
import PaginationActions from 'root/components/table/pagination-actions';

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
  Wrap,
} from './style';

const columnData = [
  {id: 'name', numeric: false, disablePadding: false, label: 'Name'},
  {id: 'budget', numeric: true, disablePadding: false, label: 'Budget'},
  {id: 'startDate', numeric: true, disablePadding: false, label: 'Start date'},
  {id: 'endDate', numeric: true, disablePadding: false, label: 'End date'},
  {id: 'status', numeric: false, disablePadding: false, label: 'Status'},
];

class CampaignList extends React.PureComponent {
  state = {
    campaigns: listOfCampaignDummy,
    error: false,
    order: 'asc',
    orderBy: 'endDate',
    page: 0,
    rowsPerPage: 5,
  };

  handleSelect = () => {
    alert('not yet, need connect redux 🐱‍👤')
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({order, orderBy});
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  render() {
    const {campaigns, order, orderBy, rowsPerPage, page, error} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, campaigns.length - page * rowsPerPage);

    return (
      <Wrap>
        <Toolbar>
          <Typography color='default' variant='title'>
            List of campaign
          </Typography>
        </Toolbar>

        <Table>
          <EnhancedHead
            columnData={columnData}
            onRequestSort={this.handleRequestSort}
            order={order}
            orderBy={orderBy}
          />

          <TableBody>
            {campaigns.sort(getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(campaign => (
                <RowTable
                  error={error.toString()}
                  hover
                  key={campaign.uid}
                  onClick={this.handleSelect}
                >
                  <Cell enabled={String(campaign.enabled)}>
                    {campaign.name}
                  </Cell>
                  <Cell enabled={String(campaign.enabled)} numeric>
                    {campaign.budget}
                  </Cell>
                  <Cell enabled={String(campaign.enabled)} numeric>
                    {campaign.startDate}
                  </Cell>
                  <Cell enabled={String(campaign.enabled)} numeric>
                    {campaign.endDate}
                  </Cell>
                  <Cell enabled={String(campaign.enabled)}>
                    {campaign.enabled ? 'Enabled' : 'Disabled'}
                  </Cell>
                </RowTable>
              ))
            }
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
                count={campaigns.length}
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
    )
  }
}

export default CampaignList;