import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Hardcoded JSON data
const departmentsData = [
  {
    name: 'Department A',
    subDepartments: ['Sub A1', 'Sub A2', 'Sub A3'],
  },
  {
    name: 'Department B',
    subDepartments: ['Sub B1', 'Sub B2'],
  },
  // ... other departments
];

function DepartmentList() {
  const [expandedDepartments, setExpandedDepartments] = useState({});

  const toggleExpand = (departmentName) => {
    setExpandedDepartments((prevExpanded) => ({
      ...prevExpanded,
      [departmentName]: !prevExpanded[departmentName],
    }));
  };

  return (
    <div>
      <h2>Department List</h2>
      {departmentsData.map((department) => (
        <div key={department.name}>
          <ListItem button onClick={() => toggleExpand(department.name)}>
            <ListItemText primary={department.name} />
            <IconButton>
              {expandedDepartments[department.name] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={expandedDepartments[department.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDepartment) => (
                <ListItem key={subDepartment} button>
                  <ListItemText inset primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

export default DepartmentList;
