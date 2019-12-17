import mongoose from 'mongoose'

export default async () => {
    const connection = await mongoose.connect('mongodb://localhost/blog', { 
      useNewUrlParser: true,
      keepAlive: 120,
      useUnifiedTopology: true
     });

    return connection.connection.db;
}

