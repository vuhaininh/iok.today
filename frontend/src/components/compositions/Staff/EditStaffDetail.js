import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { getErrorMessage } from '../../../utils/ErrorMessages';

import { ErrorPopup } from '../../atoms/ErrorPopup';
import { AppContext } from '../../../contexts/AppContext';
import { withTranslation } from 'react-i18next';
class EditStaffDetail extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    position: '',
    dob: '',
    liability: '',
    liabilityLimit: '',
    user: '',
  };
  constructor(props) {
    super(props);
    const {
      id,
      firstName,
      lastName,
      position,
      dob,
      mobile,
      address,
      liability,
      liabilityLimit,
    } = this.props.staffProfile;
    this.state = {
      id,
      firstName,
      lastName,
      mobile,
      address,
      position,
      dob,
      liability,
      liabilityLimit,
    };
  }
  resetState() {
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      mobile: '',
      address: '',
      position: '',
      dob: '',
      liability: '',
      liabilityLimit: '',
    });
  }
  render() {
    const { t, toggleDrawer } = this.props;

    return (
      <Box className="ma3">
        <ErrorPopup
          isOpen={this.context.openErrorPopup}
          handleClose={() => {
            this.context.toggleErrorPopup(false);
            this.forceUpdate();
          }}
          message={this.context.errorMessage}
        />
        <Typography
          gutterBottom
          color="primary"
          variant="h6"
          display="block"
        >
          {`${t('staff.edit')}`}
        </Typography>
        <Grid container className="mb3">
          <Grid item lg={3} className="mr3">
            <TextField
              label={t('staff.last-name')}
              variant="outlined"
              size="small"
              value={this.state.lastName}
              onChange={e =>
                this.setState({ lastName: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              label={t('staff.first-name')}
              variant="outlined"
              size="small"
              value={this.state.firstName}
              onChange={e =>
                this.setState({ firstName: e.target.value })
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container className="mb3">
          <Grid item lg={3} className="mr3">
            <TextField
              label={t('staff.mobile')}
              variant="outlined"
              size="small"
              value={this.state.mobile}
              onChange={e =>
                this.setState({ mobile: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              label={t('staff.address')}
              variant="outlined"
              size="small"
              value={this.state.address}
              onChange={e =>
                this.setState({ address: e.target.value })
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container className="mb3">
          <Grid item lg={3} className="mr3">
            <TextField
              label={t('staff.position')}
              variant="outlined"
              size="small"
              value={this.state.position}
              onChange={e =>
                this.setState({ position: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              label={t('staff.dob')}
              variant="outlined"
              size="small"
              value={this.state.dob}
              onChange={e => this.setState({ dob: e.target.value })}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container className="mb3">
          <Grid item lg={3} className="mr3">
            <TextField
              label={t('staff.liability')}
              variant="outlined"
              size="small"
              value={this.state.liability}
              onChange={e =>
                this.setState({ liability: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              label={t('staff.liability-limit')}
              variant="outlined"
              size="small"
              value={this.state.liabilityLimit}
              onChange={e =>
                this.setState({ liabilityLimit: e.target.value })
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<SaveIcon />}
          size="medium"
          className="mb3 mr3"
          onClick={() => this._editStaffProfile()}
        >
          {t('key-code.save')}
        </Button>
        <Button
          variant="outlined"
          startIcon={<ClearIcon />}
          size="medium"
          className="mb3"
          onClick={() => {
            this.resetState();
            toggleDrawer('right', false);
          }}
        >
          {t('key-code.cancel')}
        </Button>
      </Box>
    );
  }
  _editStaffProfile = () => {};
}
EditStaffDetail.contextType = AppContext;
export default withTranslation()(EditStaffDetail);
