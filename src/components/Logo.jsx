import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const Logo = forwardRef(
  ({ disabledLink = false, sx, color, width = '200.000000pt', height = '200.000000pt', ...other }, ref) => {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
      <Box sx={{ width: 40, height: 40, ...sx }} {...other}>
        <svg
          ref={ref}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="BG1" x1="100%" x2="100%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill={color ? color : PRIMARY_MAIN}
            style={{ boxShadow: '0px 0px 20px 5x green' }}
            stroke="evenodd"
            strokeWidth="1"
          >
            <path
              d="M1390 2231 c-69 -21 -141 -83 -175 -150 -55 -109 -11 -257 92 -310
110 -56 270 -21 356 79 103 121 65 316 -75 374 -39 17 -153 20 -198 7z m140
-32 c93 -20 150 -91 150 -186 -1 -128 -104 -223 -243 -223 -79 0 -111 11 -155
53 -57 55 -67 142 -26 225 30 61 75 98 147 123 62 22 62 22 127 8z"
            />
            <path
              d="M1165 1605 c-145 -27 -281 -99 -411 -217 -191 -173 -248 -274 -164
-286 18 -3 47 21 139 118 155 164 218 203 261 160 11 -11 20 -26 20 -34 0 -8
-72 -187 -159 -399 -88 -212 -175 -434 -194 -494 -102 -315 -56 -434 165 -434
103 0 177 19 294 76 203 98 474 347 474 434 0 30 -16 51 -40 51 -8 0 -69 -54
-135 -121 -166 -166 -227 -199 -256 -135 -13 29 5 84 181 536 139 359 180 483
180 544 0 99 -68 185 -160 205 -63 14 -105 13 -195 -4z m235 -54 c14 -7 36
-28 49 -46 21 -32 23 -42 19 -127 -5 -92 -7 -99 -165 -508 -88 -228 -165 -430
-172 -449 -24 -73 -8 -132 45 -159 50 -26 131 26 267 169 89 94 121 111 73 39
-36 -55 -135 -151 -222 -217 -168 -126 -329 -194 -464 -196 -158 -1 -206 62
-175 234 19 110 59 226 185 529 223 536 222 533 175 584 -30 33 -79 35 -138 5
-24 -12 -91 -72 -154 -138 -110 -113 -142 -134 -85 -55 63 86 238 232 342 284
144 72 326 94 420 51z"
            />
          </g>
        </svg>
        {/* <svg
          ref={ref}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="BG1" x1="100%" x2="100%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill={color ? color : PRIMARY_MAIN}
            style={{ boxShadow: '0px 0px 20px 5x green' }}
            stroke="evenodd"
            strokeWidth="1"
          >
            <path
              d="M965 1747 c-105 -140 -163 -265 -191 -413 -11 -55 -23 -93 -33 -98
                      -35 -21 -112 -101 -140 -144 -36 -57 -71 -159 -71 -206 0 -31 -7 -41 -68 -90
                      -91 -73 -167 -169 -224 -284 -50 -99 -57 -132 -35 -150 24 -21 180 -33 275
                      -22 90 10 202 39 255 67 26 13 33 12 95 -14 59 -24 80 -27 172 -27 92 0 113 3
                      172 27 62 26 69 27 95 14 53 -28 165 -57 255 -67 95 -11 251 1 275 22 22 18
                      15 58 -26 142 -52 105 -130 207 -217 279 -67 57 -69 60 -81 125 -24 122 -85
                      225 -182 304 -40 33 -51 48 -51 70 0 158 -159 478 -238 478 -15 0 -32 -6 -37
                      -13z m115 -212 c35 -71 86 -232 76 -242 -2 -2 -23 1 -47 6 -58 14 -164 14
                      -212 0 -22 -6 -41 -8 -44 -5 -10 10 26 139 58 206 17 36 44 87 61 114 l31 48
                      19 -23 c10 -13 36 -60 58 -104z m38 -325 l42 -13 0 -58 c0 -32 -5 -80 -11
                      -107 l-10 -50 -137 2 -137 1 -12 55 c-13 64 -16 160 -5 160 4 1 30 7 57 15 56
                      17 148 14 213 -5z m-339 -233 c1 -10 -7 -20 -16 -23 -10 -3 -46 -17 -81 -30
                      -34 -13 -64 -24 -66 -24 -8 0 16 74 36 113 11 22 38 59 61 84 l42 45 12 -73
                      c6 -41 12 -82 12 -92z m531 99 c36 -47 87 -162 77 -172 -2 -2 -32 7 -68 20
                      -35 14 -72 27 -83 30 -15 5 -17 12 -12 39 4 17 10 56 13 85 4 34 10 52 19 52
                      7 0 32 -24 54 -54z m-247 -172 l47 -7 -35 -66 c-20 -36 -44 -77 -55 -91 l-20
                      -25 -20 25 c-24 31 -80 134 -80 148 0 10 24 15 96 20 12 1 42 -1 67 -4z m-217
                      -96 c20 -40 50 -92 67 -115 30 -42 30 -43 11 -64 -10 -12 -47 -42 -82 -67 -58
                      -41 -65 -44 -87 -32 -52 28 -125 148 -140 232 -7 35 -6 37 36 59 41 20 134 57
                      151 58 4 1 24 -32 44 -71z m473 26 l74 -34 -6 -41 c-8 -59 -59 -158 -107 -204
                      l-41 -40 -43 23 c-23 13 -65 42 -91 66 l-49 43 47 70 c25 38 55 91 66 117 19
                      43 23 46 48 40 16 -3 61 -21 102 -40z m-779 -112 c0 -31 66 -156 108 -203 l41
                      -46 -72 -23 c-53 -17 -106 -24 -201 -27 l-128 -5 7 23 c19 65 119 205 187 263
                      47 40 58 44 58 18z m1032 -71 c59 -64 138 -190 138 -221 0 -21 -241 -7 -322
                      19 -38 12 -68 24 -68 28 0 3 18 26 41 50 40 43 99 153 99 184 0 46 28 30 112
                      -60z m-523 -104 c25 -23 57 -49 71 -58 14 -9 22 -20 18 -24 -17 -18 -140 -29
                      -204 -18 -36 6 -69 14 -72 17 -3 4 5 14 19 23 13 10 44 36 69 60 25 23 47 43
                      49 43 2 0 25 -19 50 -43z"
            />
          </g>
        </svg> */}
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
  }
);

export default Logo;
