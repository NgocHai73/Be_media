import { createPool, Pool } from 'mysql2/promise';

export const connect = async (): Promise<Pool> => {

    const connection = await createPool({
        host: 'sql.freedb.tech',
        user: 'freedb_social_media',
        password: '6rr6bMbab&r9!qX',
        database: 'freedb_social_media',
        connectionLimit: 10
    });

    return connection;

}