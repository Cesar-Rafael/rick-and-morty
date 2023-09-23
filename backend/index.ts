import express, { Express, Request, Response } from 'express';
import {
  gql,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import dotenv from 'dotenv';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || '8000';

app.get('/api/characters', async (req: Request, res: Response) => {
  try {
    const page = req.query?.page || 1;
    const name = req.query?.name || '';

    const response = await client.query({
      query: gql`
        {
          characters(page: ${page}, filter: { species: "human", name: "${name}" }) {
            info {
              count,
              pages
            }
            results {
              id,
              name,
              status,
              species,
              type,
              gender,
              image
            }
          }
        }
      `,
    });

    res.json({ data: { ...response.data } }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
