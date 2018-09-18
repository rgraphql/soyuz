import {
  IRGQLQueryTreeNode,
  IRGQLQueryFieldDirective,
  IRGQLQueryError,
  IFieldArgument,
  IRGQLQueryTreeMutation
} from 'rgraphql'

// QueryTreeHandler handles changes to the query tree.
export type QueryTreeHandler = (mut: IRGQLQueryTreeMutation) => void
