<script setup lang="ts">
const reports = [
  {
    id: "1",
    title: "Patient Report - John Doe",
    date: "2024-08-01",
    description:
      "Detailed report on patient John Doe, including history and current treatment.",
    downloadLink: "#",
  },
  {
    id: "2",
    title: "Billing Report - July 2024",
    date: "2024-08-01",
    description: "Summary of billing activities for July 2024.",
    downloadLink: "#",
  },
  // More reports...
];
definePageMeta({
  layout: "dashboard",
});
</script>
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Reports
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            View and manage your reports, track patient data, and generate new
            reports.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Report List</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <!-- Filters and Search -->
            <div class="flex flex-col space-y-4 mb-8">
              <div class="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search reports"
                  class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
                <select
                  class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                >
                  <option value="">All Types</option>
                  <option value="patient">Patient Reports</option>
                  <option value="billing">Billing Reports</option>
                  <option value="lab">Lab Reports</option>
                </select>
                <button
                  class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Generate Report
                </button>
              </div>
            </div>

            <!-- Report List -->
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="report in reports"
                  :key="report.id"
                  class="p-4 sm:p-6"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-lg font-semibold text-gray-900">
                        {{ report.title }}
                      </h3>
                      <p class="text-sm text-gray-500">
                        Generated on
                        <time :datetime="report.date">{{ report.date }}</time>
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        :href="report.downloadLink"
                        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >Download</a
                      >
                    </div>
                  </div>
                  <p class="mt-2 text-gray-500">{{ report.description }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
