import { Router } from 'express';

import ProjectController from '../Controllers/ProjectController'

const router: Router = Router()

// ---- PROJECTS ROUTER ----
router.post("/projects", ProjectController.create)
router.get("/projects", ProjectController.findAll)
router.get("/project/:id", ProjectController.findOne)
router.put("/project/:id", ProjectController.update)
router.delete("/project/:id", ProjectController.destroy)

export {router}