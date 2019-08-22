import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "shards-react";


export default function NavPillsExample() {
    return (
      <Nav fill>
        <NavItem>
          <NavLink href="#"><i class="fas fa-home"></i> Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i class="fas fa-space-shuttle"></i>NASA</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i class="fas fa-paw"></i>Cat Stuff</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Under construction
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
