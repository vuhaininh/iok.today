import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import CreateProductMutation from './CreateProductMutation';
import Box from '@material-ui/core/Box';
import { getErrorMessage } from '../../../utils/ErrorMessages';

import { SelectCategory } from '../Category';
class CreateProduct extends Component {
  state = {
    code: '',
    name: '',
    price: 0,
    attributes: '',
    category: '',
    codeError: '',
  };
  reset() {
    this.setState({
      code: '',
      name: '',
      price: 0,
      attributes: '',
    });
  }
  render() {
    const { t } = this.props;

    return (
      <Box>
        <Grid container justify="space-evenly" className="mt4 mb4">
          <Grid item xs={3}>
            <TextField
              label={t('products.code')}
              variant="outlined"
              size="small"
              value={this.state.code}
              onChange={e => this.setState({ code: e.target.value })}
              error={this.state.codeError !== ''}
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
    console.log(this.state);

    CreateProductMutation(this.state, errors => {
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
export default withTranslation()(CreateProduct);
