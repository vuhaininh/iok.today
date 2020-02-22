import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import CreateProductMutation from './CreateProductMutation';
import Box from '@material-ui/core/Box';
import { getErrorMessage } from '../../../utils/ErrorMessages';
import { ErrorPopup } from '../../atoms/ErrorPopup';
import { AppContext } from '../../../contexts/AppContext';

import { SelectCategory } from '../Category';
class CreateProduct extends Component {
  state = {
    code: '',
    name: '',
    price: '',
    attributes: '',
    category: '',
  };
  reset() {
    this.setState({
      code: '',
      name: '',
      price: '',
      attributes: '',
    });
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
              label={t('products.code')}
              variant="outlined"
              size="small"
              value={this.state.code}
              onChange={e => this.setState({ code: e.target.value })}
              helperText={
                this.state.codeError === ''
                  ? ''
                  : this.state.codeError
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label={t('products.name')}
              variant="outlined"
              size="small"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label={t('products.listed-price')}
              variant="outlined"
              size="small"
              value={this.state.price}
              onChange={e =>
                this.setState({ price: parseInt(e.target.value) })
              }
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justify="space-evenly" className="mt4 mb4">
          <Grid item xs={3}>
            <TextField
              label={t('products.attributes')}
              variant="outlined"
              size="small"
              value={this.state.attributes}
              onChange={e =>
                this.setState({ attributes: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <SelectCategory
              fullWidth
              handleSelect={e =>
                this.setState({ category: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<SaveIcon />}
              fullWidth
              onClick={() => this._createProduct()}
            >
              {t('behaviours.add-new')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  _createProduct = () => {
    CreateProductMutation(this.state, errors => {
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
CreateProduct.contextType = AppContext;

export default withTranslation()(CreateProduct);
