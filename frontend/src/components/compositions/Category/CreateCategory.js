import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import CreateCategoryMutation from './CreateCategoryMutation';
import { getErrorMessage } from '../../../utils/ErrorMessages';
import { ErrorPopup } from '../../atoms/ErrorPopup';
import Box from '@material-ui/core/Box';
import { AppContext } from '../../../contexts/AppContext';
class CreateCategory extends Component {
  state = {
    code: '',
    name: '',
  };
  reset() {
    this.setState({ code: '', name: '' });
  }

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
        <Grid container justify="space-evenly" className="mt4 mb4">
          <Grid item xs={3}>
            <TextField
              label={t('categories.code')}
              variant="outlined"
              size="small"
              value={this.state.code}
              onChange={e => this.setState({ code: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label={t('categories.name')}
              variant="outlined"
              size="small"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<SaveIcon />}
              onClick={() => this._createCategory()}
              fullWidth
            >
              {t('behaviours.add-new')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  _createCategory = () => {
    CreateCategoryMutation(this.state, errors => {
      this.setState({ codeError: '' });
      if (errors != null) {
        const { t } = this.props;
        const message = getErrorMessage(t, errors);
        this.context.setErrorMessage(message);
        this.context.toggleErrorPopup(true);
        this.forceUpdate();
      }
      this.reset();
    });
  };
}
CreateCategory.contextType = AppContext;
export default withTranslation()(CreateCategory);
