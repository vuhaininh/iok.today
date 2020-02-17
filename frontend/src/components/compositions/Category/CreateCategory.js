import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import CreateCategoryMutation from './CreateCategoryMutation';
import { getErrorMessage } from '../../../utils/ErrorMessages';
class CreateCategory extends Component {
  state = {
    code: '',
    name: '',
    codeError: '',
  };
  reset() {
    this.setState({ code: '', name: '' });
  }
  render() {
    const { t } = this.props;

    return (
      <Grid container justify="space-evenly" className="mt4 mb4">
        <Grid item xs={3}>
          <TextField
            label={t('categories.code')}
            variant="outlined"
            size="small"
            value={this.state.code}
            onChange={e => this.setState({ code: e.target.value })}
            error={this.state.codeError !== ''}
            helperText={
              this.state.codeError === '' ? '' : this.state.codeError
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label={t('categories.name')}
            variant="outlined"
            size="small"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<SaveIcon />}
            onClick={() => this._createCategory()}
          >
            {t('behaviours.add-new')}
          </Button>
        </Grid>
      </Grid>
    );
  }

  _createCategory = () => {
    CreateCategoryMutation(this.state, errors => {
      this.setState({ codeError: '' });
      if (errors != null) {
        const { t } = this.props;
        const message = getErrorMessage(t, errors);

        this.setState({ codeError: message });
      }
      this.reset();
    });
  };
}
export default withTranslation()(CreateCategory);
