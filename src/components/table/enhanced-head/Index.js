import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

/*const columnData = [
  {id: 'uid', numeric: false, disablePadding: false, label: 'UID'},
  {id: 'field', numeric: false, disablePadding: false, label: 'Field'},
  {id: 'operator', numeric: false, disablePadding: false, label: 'Operator'},
  {id: 'value', numeric: false, disablePadding: false, label: 'Value'},
];
*/

class EnhancedHead extends React.PureComponent {

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {columnData, order, orderBy} = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title='Sort'
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedHead;
