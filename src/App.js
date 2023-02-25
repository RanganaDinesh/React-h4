import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Structure/Navbar";
import Home from "./Components/Navbar/Home";
// import Students from "./components/students";
import StudentsBuild from "./Components/Navbar/StudentsList";
import Contact from "./Components/Navbar/ContactUs";
import Error from "./Components/Navbar/Error";
// import AddStudent from "./components/pages/AddStudent";
// import Form from "./components/form";
import "./App.css";
// import rows from "./components/rows-data.json";

function App() {
  // const [students, setStudents] = useState(rows);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="StudentsBuild" element={<StudentsBuild />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* <Route
            path="AddStudent"
            element={
              <AddStudent students={students} setStudents={setStudents} />
            }
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;