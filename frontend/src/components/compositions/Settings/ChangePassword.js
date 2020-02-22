import React, { Component } from 'react';

import { SuccessPopup } from '../../atoms/SuccessPopup';
import Box from '@material-ui/core/Box';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
} from '@material-ui/core';
import { ErrorPopup } from '../../atoms/ErrorPopup';
import { AppContext } from '../../../contexts/AppContext';
import { withTranslation } from 'react-i18next';
import PatchPassWordMutation from './PatchPasswordMutation';
import { getUser } from '../../../utils';
class ChangePassword extends Component {
  state = { password: '', confirm: '' };
  render() {
    const { t } = this.props;
    return (
      <Box>
        <ErrorPopup
          isOpen={this.context.openErrorPopup}
          handleClose={() => {
            this.context.toggleErrorPopup(false);
            this.forceUpdate();
          }}
          message={this.context.errorMessage}
        />
        <SuccessPopup
          isOpen={this.context.openSuccessPopup}
          handleClose={() => {
            this.context.toggleSuccessPopup(false);
            this.forceUpdate();
          }}
          message={t('success-messages.success-operation')}
        />
        <Card>
          <CardHeader
            subheader={t('settings.update-password')}
            title={t('settings.password')}
          />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label={t('settings.password')}
              name="password"
              onChange={e =>
                this.setState({ password: e.target.value })
              }
              type="password"
              value={this.state.password}
              variant="outlined"
            />
            <TextField
              fullWidth
              label={t('settings.confirm-password')}
              name="confirm"
              onChange={e =>
                this.setState({ confirm: e.target.value })
              }
              style={{ marginTop: '1rem' }}
              type="password"
              value={this.state.confirm}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={() => this._updatePassword()}
            >
              {t('key-code.update')}
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
  _updatePassword() {
    const user = JSON.parse(getUser());
    const { t } = this.props;
    if (this.state.password === this.state.confirm) {
      PatchPassWordMutation(
        user.id,
        { password: this.state.password },
        errors => {
          if (errors != null) {
            const message = getErrorMessage(t, errors);
            this.context.setErrorMessage(message);
            this.context.toggleErrorPopup(true);
          } else this.context.toggleSuccessPopup(true);
          this.forceUpdate();
        },
      );
    } else {
      const message = t('error-messages.same-passwords');
      this.context.setErrorMessage(message);
      this.context.toggleErrorPopup(true);
      this.forceUpdate();
    }
  }
}

ChangePassword.contextType = AppContext;
export default withTranslation()(ChangePassword);
