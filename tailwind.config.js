/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg_image:
          "url('../../public/assets/images/home-banner/home-banner.png')",
        mobile_hero_bg_image:
          "url('../../public/assets/images/home-banner/home-banner.png')",
        enabled_decks: "url('../../public/assets/images/mobile-about.png')",
        navbarbanner: "url('../../public/assets/images/hero.jpg')",
        mobile_enabled_decks:
          "url('../../public/assets/images/mobile-about.png')",
        storyteller_img:
          "url('../../public/assets/images/home-banner/storyteller.png')",
        servicesBgImg: "url('../../public/assets/images/service-bg.jpg')",
        servicesBgBannerImg:
          "url('../../public/assets/images/services-bgn.jpg')",
        servicesSecondSectionImg:
          "url('../../public/assets/images/finance-bg-1.jpg')",
        mobileTeaserImg:
          "url('../../public/assets/images/services-section.jpg')",
        productsBgBanner:
          "url('../../public/assets/images/products-bg-banner.jpg')",
        productsBgMobile:
          "url('../../public/assets/images/product-bg-mobile.jpg')",

        digital_marketing:
          "url('../../public/assets/images/home-banner/digital-marketing-banner.png')",
        digital_marketing_mobile:
          "url('../../public/assets/images/home-banner/digital-marketing-banner.png')",

        classroom_management:
          "url('../../public/assets/images/home-banner/classroom-management.png')",
        classroom_management_mobile:
          "url('../../public/assets/images/home-banner/classroom-management.png')",

        choose_excellence:
          "url('../../public/assets/images/home-banner/choose-chalaning.png')",

        testimonial:
          "url('../../public/assets/images/home-banner/testimonial.png')",

        product_banner:
          "url('../../public/assets/images/home-banner/product-banner.png')",
        product_banner_mobile:
          "url('../../public/assets/images/home-banner/product-banner.png')",

        edumatic_banner:
          "url('../../public/assets/images/home-banner/edumatic.png')",

        fee_management:
          "url('../../public/assets/images/home-banner/fee-management.png')",
        fee_management_mobile:
          "url('../../public/assets/images/home-banner/fee-management.png')",

        admission_management:
          "url('../../public/assets/images/home-banner/admission-management.png')",
        admission_management_mobile:
          "url('../../public/assets/images/home-banner/admission-management.png')",

        attendance_management:
          "url('../../public/assets/images/home-banner/attendance-management.png')",
        attendance_management_mobile:
          "url('../../public/assets/images/home-banner/attendance-management.png')",

        integrated_school:
          "url('../../public/assets/images/home-banner/integrated-school.png')",
        integrated_school_mobile:
          "url('../../public/assets/images/home-banner/integrated-school.png')",

        school_planner:
          "url('../../public/assets/images/home-banner/school-planner.png')",
        school_planner_mobile:
          "url('../../public/assets/images/home-banner/school-planner.png')",

        role_permission:
          "url('../../public/assets/images/home-banner/role-permission.png')",
        role_permission_mobile:
          "url('../../public/assets/images/home-banner/role-permission.png')",

        student_report:
          "url('../../public/assets/images/home-banner/student-report.png')",
        student_report_mobile:
          "url('../../public/assets/images/home-banner/student-report.png')",

        practice_question:
          "url('../../public/assets/images/home-banner/practice-question.png')",
        practice_question_mobile:
          "url('../../public/assets/images/home-banner/practice-question.png')",

        communication_module:
          "url('../../public/assets/images/home-banner/communication-module.png')",
        communication_module_mobile:
          "url('../../public/assets/images/home-banner/communication-module.png')",

        private_chat:
          "url('../../public/assets/images/home-banner/private-chat.png')",
        private_chat_mobile:
          "url('../../public/assets/images/home-banner/private-chat.png')",

        website_builder:
          "url('../../public/assets/images/home-banner/website-builder.png')",
        website_builder_mobile:
          "url('../../public/assets/images/home-banner/website-builder.png')",

        web_mobile_app:
          "url('../../public/assets/images/home-banner/web-mobile-app.png')",
        web_mobile_responsive_app:
          "url('../../public/assets/images/home-banner/web-mobile-app.png')",

        about_us: "url('../../public/assets/images/home-banner/about-us.png')",

        about_us_mobile:
          "url('../../public/assets/images/home-banner/about-us.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundPosition: {
        mobile_hero_bg_image: "100% 0%",
        about_us_mobile: "100% 0%",
        digital_marketing_mobile: "100% 0%",
        web_mobile_responsive_app: "100% 0%",
        product_banner_mobile: "100% 0%",
        integrated_school_mobile: "100% 0%",
        classroom_management_mobile: "100% 0%",
        role_permission_mobile: "100% 0%",
        fee_management_mobile: "100% 0%",
        attendance_management_mobile: "100% 0%",
        admission_management_mobile: "100% 0%",
        school_planner_mobile: "100% 0%",
        practice_question_mobile: "100% 0%",
        student_report_mobile: "100% 0%",
        communication_module_mobile: "100% 0%",
        website_builder_mobile: "100% 0%",
        private_chat_mobile: "100% 0%",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
