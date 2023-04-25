import React from "react";
import DashboardCard from "../../components/cards/DashboardCard";
import BlackCard from "../../components/cards/BlackCard";
import TableOrders from "../../components/dashboard/TableOrders";
import RecentSaleUsers from "../../components/dashboard/RecentSaleUsers";

const DashboardHome = () => {
  return (
    <div class="p-4 mt-11 sm:ml-64">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-4">
          <DashboardCard
            name={"Total Users"}
            amount={5738}
            percent={4.7}
            icon={"group"}
          />
          <DashboardCard
            name={"Total Sale"}
            amount={"Br.34590"}
            percent={3.2}
            icon={"paid"}
          />
          <DashboardCard
            name={"Today Sessions"}
            amount={567}
            percent={1.2}
            icon={"auto_graph"}
          />
          <BlackCard />
        </div>

        <div class="md:flex justify-between mb-4 gap-10 items-start">
          <TableOrders />
          <RecentSaleUsers />
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>

        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
