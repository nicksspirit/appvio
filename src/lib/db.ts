import PouchDB from 'pouchdb'
import { LocalDB } from '@/common/interfaces'

const localDB = new PouchDB('appvio')
const remoteDB = new PouchDB(process.env.VUE_APP_REMOTE_COUCHDB_URL, {
  auth: {
    username: process.env.VUE_APP_REMOTE_COUCHDB_UNAME,
    password: process.env.VUE_APP_REMOTE_COUCHDB_PASSWD
  }
})
const syncHandler = localDB.sync(remoteDB, { live: true, retry: true })

export default {
  local: localDB,
  syncHandler
} as LocalDB
