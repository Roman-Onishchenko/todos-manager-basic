import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import EditIcon from 'material-ui-icons/Dvr';
import IconButton from 'material-ui/IconButton';
import PriorityIcon from 'material-ui-icons/Warning';
import SuccessIcon from 'material-ui-icons/CheckBox';
import Tooltip from 'material-ui/Tooltip';

import FilterCategory from '../FilterCategory/';
import AddModallWrapped from '../Modals/AddModal/';
import EmptyTableImg from './emptyTableImg';

const styles = theme => ({
  root: {
    width: '95%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
  tableBody: {
    minHeight: '420px',
    maxHeight: '420px',
    overflow: 'auto',
  },
  mainCell: {
    padding: '10px 5px 10px 15px',
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: '15px',
    backgroundColor: '#F5F5F5',
    color: '#37474F',
  },
  iconCell: {
    padding: '10px 0 10px 0',
    backgroundColor: '#ECEFF1',
  },
  successIcon: {
    color: '#558B2F',
  },
  editIcon: {
    color: '#2a51a4',
  },
  deleteIcon: {
    color: '#6D4C41',
  },
  filterButton: {
    display: 'block',
    margin: '18px auto',
    backgroundColor: '#607D8B',
    color: 'white',
    padding: '0 10px',
    fontSize: '.88em',
  },
  deleteButton: {
    display: 'block',
    margin: '18px auto',
    backgroundColor: '#C62828',
    color: 'white',
    padding: '0 10px',
    fontSize: '.9em',
  },
  button: {
    display: 'block',
    margin: '18px auto',
  },
  taskDone: {
    color: '#1B5E20',
  },
});

class TasksTable extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const { classes, tasksList } = this.props;
    return (
      <Paper className={classes.root}>
        <Button variant="raised" color="primary" className={classes.button}>
          Add Task
        </Button>
        <div className={classes.tableBody}>
          <Table className={classes.table}>
            <TableBody>
              <EmptyTableImg />
              {/*<TableRow>
                <TableCell className={classes.iconCell}>
                  <Tooltip id="tooltip-icon" title="Success">
                    <IconButton>
                      <SuccessIcon className={classes.successIcon} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell className={classes.mainCell}><p className={classes.taskDone}>'асто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века'</p></TableCell>
                <TableCell className={classes.iconCell}>
                </TableCell>
                <TableCell className={classes.iconCell}>
                  <IconButton>
                    <PriorityIcon className={"highPriorityIcon"} />
                  </IconButton>
                </TableCell>
                <TableCell className={classes.iconCell}>
                </TableCell>
              </TableRow>
              {tasksList.map(task => {
                return (
                  <TableRow key={task.get('id')}>
                    <TableCell className={classes.iconCell}>
                      <Tooltip id="tooltip-icon" title="Priority">
                        <IconButton>
                          <PriorityIcon className={`${task.get('priority')}PriorityIcon`} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className={classes.mainCell}>{task.get('text')}</TableCell>
                    <TableCell className={classes.iconCell}>
                      <Tooltip id="tooltip-icon" title="Success">
                        <IconButton aria-label="Success">
                          <SuccessIcon className={classes.successIcon} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className={classes.iconCell}>
                      <Tooltip id="tooltip-icon" title="Edit">
                         <IconButton aria-label="Edit">
                          <EditIcon className={classes.editIcon} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className={classes.iconCell}>
                      <Tooltip id="tooltip-icon" title="Delete">
                         <IconButton aria-label="Delete">
                          <DeleteIcon className={classes.deleteIcon} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })} */}
            </TableBody>
          </Table>
        </div>
        <Button variant="raised" id="filterButton" color="default" className={classes.filterButton}>
          Open Filters
        </Button>
        {/*<Button variant="raised" id="deleteButton" color="default" className={classes.deleteButton}>
          Clear Tasks
        </Button>*/}
      </Paper>
    );
  }
}

TasksTable.propTypes = {
  tasksList: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TasksTable);