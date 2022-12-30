import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const ForkAltIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 80 80"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M 28 7 C 26.416667 7 25.101892 7.6297556 24.251953 8.5859375 C 23.402014 9.5421194 23 10.777778 23 12 C 23 13.222222 23.402014 14.457881 24.251953 15.414062 C 24.915195 16.16021 25.863918 16.701779 27 16.90625 L 27 20 L 27.091797 20 L 27.041016 20.283203 L 27.652344 20.9375 L 28 21 L 28.800781 20.597656 L 28.908203 20 L 29 20 L 29 16.90625 C 30.136082 16.701779 31.084805 16.16021 31.748047 15.414062 C 32.597986 14.457882 33 13.222222 33 12 C 33 10.777778 32.597986 9.5421194 31.748047 8.5859375 C 30.898108 7.6297556 29.583333 7 28 7 z M 28 9 C 29.083333 9 29.768559 9.3702444 30.251953 9.9140625 C 30.735347 10.457881 31 11.222222 31 12 C 31 12.777778 30.735347 13.542119 30.251953 14.085938 C 29.768559 14.629755 29.083333 15 28 15 C 26.916667 15 26.231441 14.629756 25.748047 14.085938 C 25.264653 13.542118 25 12.777778 25 12 C 25 11.222222 25.264653 10.457881 25.748047 9.9140625 C 26.231441 9.3702444 26.916667 9 28 9 z M 66 15 C 64.416667 15 63.101892 15.629756 62.251953 16.585938 C 61.402014 17.542119 61 18.777778 61 20 C 61 21.222222 61.402014 22.457881 62.251953 23.414062 C 62.854649 24.092097 63.750008 24.50653 64.75 24.748047 C 64.69524 26.214743 64.593953 27.616101 64.310547 28.759766 L 64.392578 28.779297 L 64.269531 29.470703 L 64.880859 30.125 L 65.228516 30.1875 L 66.029297 29.785156 L 66.132812 29.210938 L 66.251953 29.240234 C 66.571218 27.951867 66.678229 26.429856 66.738281 24.851562 C 67.96824 24.679845 69.044121 24.205979 69.748047 23.414062 C 70.597986 22.457882 71 21.222222 71 20 C 71 18.777778 70.597986 17.542119 69.748047 16.585938 C 68.898108 15.629756 67.583333 15 66 15 z M 66 17 C 67.083333 17 67.768559 17.370244 68.251953 17.914062 C 68.735347 18.457881 69 19.222222 69 20 C 69 20.777778 68.735347 21.542119 68.251953 22.085938 C 67.768559 22.629756 67.083333 23 66 23 C 64.916667 23 64.231441 22.629756 63.748047 22.085938 C 63.264653 21.542119 63 20.777778 63 20 C 63 19.222222 63.264653 18.457881 63.748047 17.914062 C 64.231441 17.370244 64.916667 17 66 17 z M 28 23 L 27.199219 23.402344 L 27.041016 24.283203 L 27.652344 24.9375 L 28 25 L 28.800781 24.597656 L 28.958984 23.716797 L 28.347656 23.0625 L 28 23 z M 28 27 L 27.199219 27.402344 L 27.041016 28.283203 L 27.652344 28.9375 L 28 29 L 28.800781 28.597656 L 28.958984 27.716797 L 28.347656 27.0625 L 28 27 z M 28 31 L 27.199219 31.402344 L 27.041016 32.283203 L 27.652344 32.9375 L 28 33 L 28.800781 32.597656 L 28.958984 31.716797 L 28.347656 31.0625 L 28 31 z M 63.679688 31.857422 L 62.878906 32.259766 L 62.720703 33.140625 L 63.333984 33.796875 L 63.679688 33.857422 L 64.482422 33.457031 L 64.638672 32.574219 L 64.027344 31.919922 L 63.679688 31.857422 z M 61.025391 34.820312 L 60.224609 35.222656 L 60.066406 36.103516 L 60.677734 36.757812 L 61.025391 36.820312 L 61.826172 36.419922 L 61.984375 35.537109 L 61.373047 34.882812 L 61.025391 34.820312 z M 28 35 L 27.199219 35.402344 L 27.041016 36.283203 L 27.652344 36.9375 L 28 37 L 28.800781 36.597656 L 28.958984 35.716797 L 28.347656 35.0625 L 28 35 z M 57.580078 36.828125 L 56.779297 37.230469 L 56.621094 38.111328 L 57.232422 38.765625 L 57.580078 38.828125 L 58.380859 38.427734 L 58.539062 37.544922 L 57.925781 36.890625 L 57.580078 36.828125 z M 53.787109 38.085938 L 52.986328 38.486328 L 52.828125 39.369141 L 53.439453 40.023438 L 53.787109 40.085938 L 54.587891 39.683594 L 54.746094 38.802734 L 54.132812 38.148438 L 53.787109 38.085938 z M 49.876953 38.925781 L 49.076172 39.326172 L 48.917969 40.208984 L 49.529297 40.863281 L 49.876953 40.925781 L 50.677734 40.523438 L 50.835938 39.640625 L 50.224609 38.986328 L 49.876953 38.925781 z M 27.984375 38.986328 A 1.0001 1.0001 0 0 0 27 40 L 27 64.09375 C 25.863918 64.298221 24.915195 64.83979 24.251953 65.585938 C 23.402014 66.542119 23 67.777778 23 69 C 23 70.222222 23.402014 71.457881 24.251953 72.414062 C 25.101892 73.370244 26.416667 74 28 74 C 29.583333 74 30.898108 73.370244 31.748047 72.414062 C 32.597986 71.457881 33 70.222222 33 69 C 33 67.777778 32.597986 66.542119 31.748047 65.585938 C 31.084805 64.83979 30.136082 64.298221 29 64.09375 L 29 57 C 29 51.653622 30.498467 48.479164 32.837891 46.339844 C 35.177314 44.200524 38.491355 43.080458 42.205078 42.298828 L 42.189453 42.224609 L 42.800781 41.917969 L 42.958984 41.037109 L 42.347656 40.382812 L 42 40.320312 L 41.810547 40.416016 L 41.794922 40.341797 C 37.944645 41.152167 34.257858 42.330601 31.488281 44.863281 C 30.516619 45.751833 29.684131 46.816088 29 48.056641 L 29 40 A 1.0001 1.0001 0 0 0 27.984375 38.986328 z M 45.933594 39.597656 L 45.132812 39.998047 L 44.974609 40.880859 L 45.587891 41.535156 L 45.933594 41.597656 L 46.734375 41.195312 L 46.892578 40.314453 L 46.28125 39.660156 L 45.933594 39.597656 z M 27.904297 66.007812 A 1.0001 1.0001 0 0 0 28.097656 66.009766 C 29.120017 66.033196 29.784517 66.388197 30.251953 66.914062 C 30.735347 67.457881 31 68.222222 31 69 C 31 69.777778 30.735347 70.542119 30.251953 71.085938 C 29.768559 71.629756 29.083333 72 28 72 C 26.916667 72 26.231441 71.629756 25.748047 71.085938 C 25.264653 70.542119 25 69.777778 25 69 C 25 68.222222 25.264653 67.457881 25.748047 66.914062 C 26.215828 66.387809 26.880642 66.030758 27.904297 66.007812 z"></path>
    </svg>
  );
};

export default ForkAltIcon;
