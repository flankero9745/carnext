const mockData = {
  vehicleInfoDisplaySectionArgs: [
    {
      regionFilterLabelText1: "Грузовики",
      vehicleTypeSelector1: "Легковые",
      sanitizedHtmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-49-inside-3_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint2_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1268 508) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_4" data-node-id="58:36" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-49-inside-3_1_533" fill="white">\n<path d="M1263 508H1273V513H1263V508Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint2_diamond_1_533)" mask="url(#path-49-inside-3_1_533)"/>\n</g></svg>',
      htmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-73-inside-6_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint5_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(958 507.5) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_7" data-node-id="58:60" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-73-inside-6_1_533" fill="white">\n<path d="M953 507.5H963V512.5H953V507.5Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint5_diamond_1_533)" mask="url(#path-73-inside-6_1_533)"/>\n</g></svg>',
    },
    {
      vehicleTypeSelector1: "Марка",
      regionFilterLabelText1: "Zeekr",
      htmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-39-inside-1_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint0_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(958 555) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_2" data-node-id="58:22" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-39-inside-1_1_533" fill="white">\n<path d="M953 555H963V560H953V555Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint0_diamond_1_533)" mask="url(#path-39-inside-1_1_533)"/>\n</g></svg>',
      sanitizedHtmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-54-inside-4_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint3_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1268 554.5) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_5" data-node-id="58:40" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-54-inside-4_1_533" fill="white">\n<path d="M1263 554.5H1273V559.5H1263V554.5Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint3_diamond_1_533)" mask="url(#path-54-inside-4_1_533)"/>\n</g></svg>',
    },
    {
      vehicleTypeSelector1: "Модель",
      regionFilterLabelText1: "Тип двигателя",
      htmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-44-inside-2_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint1_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(958 602) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_3" data-node-id="58:29" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-44-inside-2_1_533" fill="white">\n<path d="M953 602H963V607H953V602Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint1_diamond_1_533)" mask="url(#path-44-inside-2_1_533)"/>\n</g></svg>',
      sanitizedHtmlContent2:
        '<svg viewBox="0 0 10 10" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="path-59-inside-5_1_533" fill="white" xmlns="http://www.w3.org/2000/svg">\n<path d="M0,2.5h10v5h-10z"/>\n</mask><radialGradient id="paint4_diamond_1_533" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1268 601.5) scale(5)" xmlns="http://www.w3.org/2000/svg">\n<stop offset="1" stop-color="#DB5C4C"/>\n<stop offset="1" stop-opacity="0"/>\n</radialGradient></defs><g id="Border_6" data-node-id="58:44" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-59-inside-5_1_533" fill="white">\n<path d="M1263 601.5H1273V606.5H1263V601.5Z"/>\n</mask>\n<path d="M0,2.5v-5h-5v5zM10,2.5h5v-5h-5zM0,7.5h10v-10h-10zM5,2.5v5h10v-5zM5,7.5v-5h-10v5z" fill="url(#paint4_diamond_1_533)" mask="url(#path-59-inside-5_1_533)"/>\n</g></svg>',
    },
  ],
};

export { mockData };
