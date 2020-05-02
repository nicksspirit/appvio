export interface AppData {
  name: string
  description: string
  tags: string[]
  url: string
}

export interface LocalDB {
  local: PouchDB.Database<{}>,
  syncHandler: PouchDB.Replication.Sync<{}>
}
