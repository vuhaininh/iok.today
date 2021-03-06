import React, { Component } from 'react';
import { EuiButtonEmpty } from '@elastic/eui';
import { withTranslation } from 'react-i18next';
import { getUser, signOut } from '../../../utils';
import RevokeTokenMutation from './RevokeTokenMutation';
import { withRouter } from 'found';
class LogOut extends Component {
  render() {
    const { t } = this.props;
    const user = getUser();

    return (
      <div>
        {user ? (
          <EuiButtonEmpty
            className="mt2"
            onClick={() => {
              RevokeTokenMutation();
              signOut();
              this.props.router.replace('/');
              window.location.reload(true);
            }}
          >
            {t('logout')}
          </EuiButtonEmpty>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withTranslation()(withRouter(LogOut));
