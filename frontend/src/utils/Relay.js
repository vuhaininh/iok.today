import { ConnectionHandler } from 'relay-runtime';

export const AddEdgeToRoot = ({
  mutation,
  node,
  dataSet,
  edgeType,
  store,
}) => {
  const payload = store.getRootField(mutation);
  const returnNode = payload.getLinkedRecord(node);
  const root = store.getRoot();
  const conn = ConnectionHandler.getConnection(root, dataSet);

  const edge = ConnectionHandler.createEdge(
    store,
    conn,
    returnNode,
    edgeType,
  );
  ConnectionHandler.insertEdgeBefore(conn, edge);
};
