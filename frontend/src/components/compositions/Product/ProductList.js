import React, { Component } from 'react';
import { Table } from '../../atoms/Table';
import { dateFormat } from '../../../utils/Formatter';
import { withTranslation } from 'react-i18next';
import { SelectCategory } from '../Category';
import TextField from '@material-ui/core/TextField';
import PatchProductMutation from './PatchProductMutation';
import { ErrorPopup } from '../../atoms/ErrorPopup';
import Box from '@material-ui/core/Box';
import { getErrorMessage } from '../../../utils/ErrorMessages';
import { AppContext } from '../../../contexts/AppContext';
import { getUser, hasRoles } from '../../../utils';

class ProductList extends Component {
  render() {
    const { products, t } = this.props;
    const user = JSON.parse(getUser());

    const canEdit = hasRoles(user, [
      'accountant',
      'admin',
      'director',
    ]);
    var category = '';

    const columns = [
      {
        title: t('key-code.code'),
        field: 'code',
      },
      {
        title: t('products.name'),
        field: 'name',
      },
      {
        title: t('key-code.price'),
        field: 'listedPrice',
        render: rowData => rowData.listedPrice.toLocaleString(),
        customSort: (a, b) => {
          return Number(a.listedPrice) - Number(b.listedPrice);
        },
      },
      {
        title: t('key-code.group'),
        field: 'category',
        render: rowData => rowData.category.name,
        editComponent: tableData => {
          return (
            <SelectCategory
              defaultValue={tableData.rowData.category.id}
              handleSelect={e => {
                category = e.target.value;
              }}
            />
          );
        },
      },
      {
        title: t('products.attributes'),
        field: 'attributes',
      },
      {
        title: t('key-code.date'),
        field: 'updatedAt',
        render: rowData =>
          dateFormat(rowData.updatedAt, 'dd/mm/yyyy'),
        editComponent: tableData => {
          return (
            <TextField
              defaultValue={dateFormat(
                tableData.rowData.updatedAt,
                'dd/mm/yyyy',
              )}
              InputProps={{
                readOnly: true,
              }}
            />
          );
        },
      },
    ];

    const getData = products => {
      return products.edges.map(({ node }) => {
        const {
          id,
          code,
          name,
          listedPrice,
          category,
          attributes,
          updatedAt,
        } = node;

        return {
          id,
          code,
          name,
          listedPrice,
          category,
          attributes,
          updatedAt,
        };
      });
    };

    return (
      <Box>
        <ErrorPopup
          isOpen={this.context.openError}
          handleClose={() => {
            this.context.toggleError(false);
            this.forceUpdate();
          }}
          message={this.context.errorMessage}
        />
        <Table
          columns={columns}
          data={getData(products)}
          columnIndex={-1}
          editable={
            canEdit
              ? {
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      if (category !== '')
                        newData.category = category;
                      else newData.category = oldData.category.id;
                      category = '';
                      delete newData.updatedAt;
                      const id = newData.id;
                      delete newData.id;
                      PatchProductMutation(id, newData, errors => {
                        if (errors != null) {
                          const { t } = this.props;
                          const message = getErrorMessage(t, errors);
                          this.context.setErrorMessage(message);
                          this.context.toggleError(true);
                          this.forceUpdate();
                        }
                      });

                      resolve();
                    }),
                }
              : {}
          }
        />
      </Box>
    );
  }
}
ProductList.contextType = AppContext;
export default withTranslation()(ProductList);
