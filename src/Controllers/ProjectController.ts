import db from '../config/db'
import {Request, Response} from 'express'

class ProjectController {

   async create(req: Request, res: Response) {
      await db.query(`
        INSERT INTO projects(
        created_at,
        updated_at,
        title,
        description,
        website,
        git)
        VALUES(
        '${req.body.created_at}',
        '${req.body.updated_at}',
        '${req.body.title}',
        '${req.body.description}',
        '${req.body.website}',
        '${req.body.git}')
      `)
      
      return res.status(201).json(req.body)
   }

   async findAll(req: Request, res: Response) {
      db.query(`SELECT * FROM projects`, function(err: any, result: any) {
         res.status(200).send(result)
      })
   }

   async findOne(req: Request, res: Response) {
      db.query(`SELECT * FROM projects WHERE (project_id = '${req.params.id}')`, function(err: any, result: any) {
         res.status(200).send(result)
      })
   }

   async update(req: Request, res: Response) {

   }

   async destroy(req: Request, res: Response) {

   }
}

export default new ProjectController
