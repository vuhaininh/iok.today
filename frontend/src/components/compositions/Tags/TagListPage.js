import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import TagList from './TagList';
const TagListPageQuery = graphql`
  query TagListPageQuery {
    tags {
      ...TagList_tags
    }
  }
`;
class TagListPage extends Component {
  _refresh = () => {
    RefreshTokenMutation();
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={TagListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return props.tags == null ? (
              <div>No tag</div>
            ) : (
              <div>
                <TagList tags={props.tags} />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default TagListPage;
