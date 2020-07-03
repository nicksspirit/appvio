import PouchDB from 'pouchdb'
import pouchdbFind from 'pouchdb-find'
import { LocalDB, AppDocument } from '@/common/interfaces'

PouchDB.plugin(pouchdbFind)

const localDB = new PouchDB<AppDocument>('appvio')
const remoteDB = new PouchDB<AppDocument>(
  process.env.VUE_APP_REMOTE_COUCHDB_URL,
  {
    auth: {
      username: process.env.VUE_APP_REMOTE_COUCHDB_UNAME,
      password: process.env.VUE_APP_REMOTE_COUCHDB_PASSWD
    }
  }
)
const syncHandler = localDB.sync(remoteDB, { live: true, retry: true })

export default {
  local: localDB,
  syncHandler
} as LocalDB
