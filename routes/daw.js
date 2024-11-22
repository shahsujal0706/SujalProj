import { createAdmin, getAllAdmin } from "../controllers/admin.js";
import { createUser, roleCheck } from "../controllers/common.js";
import express from "express";

import { getAllStudent, createStudent } from "../controllers/student.js";
import { createTeacher, getAllTeacher } from "../controllers/teacher.js";
import { createSubject, getAllSubject } from "../controllers/subject.js";
import { isAdmin, isAdminTeacher, isTeacher } from "../middleware/auth.js";
import {
  createPractical,
  enrollStudentInPractical,
  getAllPracticals,
} from "../controllers/practical.js";

const router = express.Router();

//Admin
router.post("/Admincreate", createAdmin);

router.get("/AllAdminget", getAllAdmin);

router.post("/Subjectcreate", isAdmin, createSubject);
router.get("/AllSubjectget", getAllSubject);

//Student
router.post("/Studentcreate", createStudent);

router.get("/AllStudentget", getAllStudent, isAdminTeacher);

//teacher
router.post("/Teachercreate", createTeacher);
router.get("/Teacherget", getAllTeacher);

//common
router.get("/Checkrole", roleCheck);
router.post("/Usercreate", createUser);

//Pratical
router.post("/Practicalcreate", createPractical, isTeacher);
router.get("/practicals/get", getAllPracticals);
router.post("/practicals/enroll", enrollStudentInPractical);

export default router;
