<script setup>
import { ref } from "vue";
import sidebarNavItems from "~/components/SidebarNavItems/index.vue";
import sidebarNavItemsMobile from "~/components/SidebarNavItemsMobile/index.vue";

import {
  CalendarIcon,
  ChartPieIcon,
  HomeIcon,
  TagIcon,
  CreditCardIcon,
  CogIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Appointments",
    href: "/dashboard/appointments",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Doctors",
    href: "/dashboard/doctors",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Specialties",
    href: "/dashboard/specialties",
    icon: TagIcon,
    current: false,
  },
  {
    name: "Payments",
    href: "/dashboard/payments",
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: CogIcon,
    current: false,
  },
];
</script>
<template>
  <div>
    <!-- Sidebar for mobile -->
    <sidebarNavItemsMobile :navigation="navigation" />
    <!-- Sidebar for mobile -->

    <!-- Static sidebar for desktop -->
    <sidebarNavItems :navigation="navigation" />
    <!-- Static sidebar for desktop -->
  </div>
</template>
