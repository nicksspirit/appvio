export interface AppDocument {
  $type: string
  name: string
  description: string
  tags: string[]
  url: string
}

export interface DocumentResponse {
  /** Only present if `include_docs` was `true`. */
  doc?: PouchDB.Core.ExistingDocument<AppDocument & PouchDB.Core.AllDocsMeta>
  id: PouchDB.Core.DocumentId
  key: PouchDB.Core.DocumentKey
  value: {
    rev: PouchDB.Core.RevisionId
    deleted?: boolean
  }
}

export interface LocalDB {
  local: PouchDB.Database<{}>
  syncHandler: PouchDB.Replication.Sync<{}>
}
