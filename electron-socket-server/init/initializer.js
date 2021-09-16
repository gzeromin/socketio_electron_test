'use strict';

exports.InitMongoDB = (env, mongoose) => {
  if (env.VACP_SERVICES) {
    /**
     * Cloud
     */
     const connectURL = env.MONGO_URI;
     const options = {
       connectTimeoutMS: 4000,
       keepAlive: true,
       ha: true,
       autoReconnect: true,
       reconnectTries: 30,
       useNewUrlParser: true
     }
     mongoose.connect(connectURL, options);
     const db = mongoose.connection;
     db.on('open', () => {
       console.log('db connected');
     })
  } else {
    /**
     * Local
     */
    const connectURL = 'mongodb://127.0.0.1:27017/electron-socket';
    const options = {
      connectTimeoutMS: 4000,
      keepAlive: true,
      ha: true,
      autoReconnect: true,
      reconnectTries: 30,
      useNewUrlParser: true
    }
    mongoose.connect(connectURL, options);
    const db = mongoose.connection;
    db.on('open', () => {
      console.log('db connected');
    })
  }
}