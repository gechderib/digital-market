import React, { useContext, useState } from "react";
import DmfsseContex from "../../app/contextStore";

const SideBar = () => {

  const sideBarCtx = useContext(DmfsseContex);

  return (
    <aside
      class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        sideBarCtx.showSidebar ? null : "-translate-x-full"
      } border-r border-gray-50 sm:translate-x-0 bg-gray-50`}
    >
      <div class="h-full px-3 pb-4 overflow-y-auto ">
        <ul class="space-y-2 font-medium">
          <li>
            <button
              onClick={sideBarCtx.setDasboardTab("dashboard")}
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                dashboard
              </span>

              <span class="ml-3">Dashboard</span>
            </button>
          </li>

          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                cast_for_education
              </span>
              <span class="ml-3">Training</span>
            </button>
          </li>
          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                move_to_inbox
              </span>
              <span class="ml-3">Inbox</span>
              
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                3
              </span>
            </button>
          </li>
          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                person
              </span>
              <span class="ml-3">Users</span>
            </button>
          </li>
          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white dark:hover:bg-gray-700"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                category
              </span>
              <span class="ml-3">Products</span>
            </button>
          </li>
          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                login
              </span>
              <span class="ml-3">Sign In</span>
            </button>
          </li>
          <li>
            <button
              
              class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-white"
            >
              <span class="material-symbols-outlined text-gray-500 hover:animate-bounce">
                app_registration
              </span>
              <span class="ml-3">Register</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
