import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const mapStateToProps = state => ({
    user: state.user,
    coach: state.coach.coach,
});

const CustomTableCell = withStyles(theme => ({
    head: {
        fontSize: 20,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});



class CustomizedTable extends Component {

    deleteCoach = (id) => {
        //TODO: set up delete
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                this.props.dispatch({ type: 'DELETE_COACH', payload: id });
                swal('The player was deleted', {
                    icon: 'success'
                });
            }
            else {
                swal('The player was not deleted');
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className="center-element">
                    <TableHead className="table-head">
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Email</CustomTableCell>
                            <CustomTableCell>Status</CustomTableCell>
                            <CustomTableCell>Delete</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.coach.map(coach => {
                            return (
                                <TableRow className={classes.row} key={coach.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {coach.coach_name}
                                    </CustomTableCell>
                                    <CustomTableCell>{coach.email}</CustomTableCell>
                                    <CustomTableCell>{coach.status_type}</CustomTableCell>
                                    <CustomTableCell> <Button variant="contained" color="secondary" onClick={() => this.deleteCoach(coach.id)}><DeleteIcon />Delete</Button></CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(CustomizedTable));