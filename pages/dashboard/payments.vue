<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const payments = [
  {
    number: "PMT12345678",
    href: "#",
    invoiceHref: "#",
    receiptHref: "#",
    createdDate: "Aug 1, 2024",
    createdDatetime: "2024-08-01",
    paidDate: "Aug 1, 2024",
    paidDatetime: "2024-08-01",
    total: "$350.00",
    items: [
      {
        id: 1,
        name: "Medical Consultation",
        description:
          "Consultation with Dr. Smith for a comprehensive health assessment and personalized medical advice.",
        href: "#",
        price: "$150.00",
        imageSrc: "https://example.com/images/consultation.jpg",
        imageAlt: "Medical consultation with a healthcare professional.",
      },
      // More items...
    ],
  },
  // More payments...
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
            Payment History
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Review your payment history, download invoices, and manage your
            payment methods.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Recent payments</h2>
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="payment in payments"
              :key="payment.number"
              class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <h3 class="sr-only">
                Payment made on
                <time :datetime="payment.createdDatetime">{{
                  payment.createdDate
                }}</time>
              </h3>

              <div
                class="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
              >
                <dl
                  class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
                >
                  <div>
                    <dt class="font-medium text-gray-900">Payment ID</dt>
                    <dd class="mt-1 text-gray-500">{{ payment.number }}</dd>
                  </div>
                  <div class="hidden sm:block">
                    <dt class="font-medium text-gray-900">Date</dt>
                    <dd class="mt-1 text-gray-500">
                      <time :datetime="payment.createdDatetime">{{
                        payment.createdDate
                      }}</time>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Amount</dt>
                    <dd class="mt-1 font-medium text-gray-900">
                      {{ payment.total }}
                    </dd>
                  </div>
                </dl>

                <Menu as="div" class="relative flex justify-end lg:hidden">
                  <div class="flex items-center">
                    <MenuButton
                      class="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only"
                        >Options for payment {{ payment.number }}</span
                      >
                      <EllipsisVerticalIcon
                        class="h-6 w-6"
                        aria-hidden="true"
                      />
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a
                            :href="payment.receiptHref"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            >View Receipt</a
                          >
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a
                            :href="payment.invoiceHref"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            >Download Invoice</a
                          >
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>

                <div
                  class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4"
                >
                  <a
                    :href="payment.receiptHref"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Receipt</span>
                    <span class="sr-only">{{ payment.number }}</span>
                  </a>
                  <a
                    :href="payment.invoiceHref"
                    class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>Download Invoice</span>
                    <span class="sr-only"
                      >for payment {{ payment.number }}</span
                    >
                  </a>
                </div>
              </div>

              <!-- Payment Details -->
              <h4 class="sr-only">Payment Details</h4>
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="item in payment.items"
                  :key="item.id"
                  class="p-4 sm:p-6"
                >
                  <div class="flex items-center sm:items-start">
                    <div
                      class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40"
                    >
                      <img
                        :src="item.imageSrc"
                        :alt="item.imageAlt"
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="ml-6 flex-1 text-sm">
                      <div
                        class="font-medium text-gray-900 sm:flex sm:justify-between"
                      >
                        <h5>{{ item.name }}</h5>
                        <p class="mt-2 sm:mt-0">{{ item.price }}</p>
                      </div>
                      <p class="hidden text-gray-500 sm:mt-2 sm:block">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-6 sm:flex sm:justify-between">
                    <div class="flex items-center">
                      <CheckCircleIcon
                        class="h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <p class="ml-2 text-sm font-medium text-gray-500">
                        Paid on
                        <time :datetime="payment.paidDatetime">{{
                          payment.paidDate
                        }}</time>
                      </p>
                    </div>

                    <div
                      class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
                    >
                      <div class="flex flex-1 justify-center">
                        <a
                          :href="item.href"
                          class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                          >View Item</a
                        >
                      </div>
                      <div class="flex flex-1 justify-center pl-4">
                        <a
                          href="#"
                          class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                          >Buy Again</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
