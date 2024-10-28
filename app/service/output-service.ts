import {Pool, DataTypeOIDs} from 'postgrejs';


export class OutputService {
  private pool: Pool;

  constructor() {
  }

  public init(config: any) {
    this.pool = new Pool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      ssl: {
        rejectUnauthorized: false
      }
      //schema?: string;
      //connectTimeoutMs?: number;
    });
  }

  public handler = async (event: any) => {
  };
}
