import React from 'react'

interface SVGProps{
    classname: string;
}

const OpenSvg:React.FC<SVGProps> = (props) => {
  return (
    <svg
    className={props.classname}
      xmlns='http://www.w3.org/2000/svg'
      version='1.0'
      width='512.000000pt'
      height='512.000000pt'
      viewBox='0 0 512.000000 512.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path d='M2463 5055 c-71 -16 -141 -51 -194 -98 -20 -18 -342 -394 -714 -837 -373 -443 -691 -819 -708 -837 l-30 -32 -251 -3 -251 -3 -69 -34 c-77 -37 -148 -102 -189 -172 -60 -102 -58 -49 -55 -1410 l3 -1244 24 -58 c46 -115 152 -215 268 -253 56 -18 123 -19 2263 -19 2140 0 2207 1 2263 19 116 38 222 138 268 253 l24 58 3 1244 c3 1361 5 1308 -55 1410 -40 69 -111 134 -188 172 l-69 34 -251 3 c-161 2 -254 7 -263 14 -7 6 -332 390 -722 852 -501 594 -723 851 -757 873 -100 68 -236 94 -350 68z m-333 -558 c0 -7 13 -40 30 -75 80 -169 283 -276 465 -245 164 28 288 127 349 278 13 31 27 55 32 54 5 -1 247 -283 537 -628 l528 -626 -756 -3 c-415 -1 -1095 -1 -1510 0 l-756 3 533 632 c292 347 536 629 540 627 4 -3 8 -11 8 -17z m-709 -2449 c69 -32 135 -98 168 -168 26 -55 26 -56 26 -315 l0 -260 -29 -55 c-108 -209 -377 -257 -539 -97 -29 29 -64 75 -77 102 -25 49 -25 54 -25 310 0 259 0 260 26 315 28 59 94 132 143 157 96 50 213 54 307 11z m854 -1 c123 -57 195 -171 195 -307 0 -133 -72 -250 -188 -307 -52 -26 -68 -28 -189 -31 l-133 -4 0 -144 c0 -140 -1 -146 -25 -169 -24 -25 -65 -32 -100 -19 -43 17 -45 39 -45 509 l0 447 30 30 30 30 183 -4 c175 -3 184 -4 242 -31z m1026 4 c17 -18 29 -40 29 -56 0 -16 -12 -38 -29 -56 l-29 -29 -226 0 -226 0 0 -130 0 -130 127 0 c116 0 129 -2 150 -22 15 -14 23 -33 23 -54 0 -79 -30 -94 -185 -94 l-115 0 0 -125 0 -125 218 0 c236 0 257 -4 280 -54 16 -32 9 -69 -18 -96 -19 -19 -35 -20 -312 -20 -286 0 -292 0 -315 22 l-23 21 0 464 0 464 25 24 24 25 286 0 287 0 29 -29z m331 10 c13 -11 103 -151 199 -311 l174 -290 5 286 5 286 28 24 c31 26 57 30 90 12 47 -25 46 -18 47 -501 l0 -458 -25 -24 c-27 -28 -80 -34 -108 -12 -10 6 -98 147 -197 311 l-179 300 -3 -293 -3 -293 -24 -19 c-33 -27 -86 -25 -116 6 l-25 24 0 459 c0 482 -1 476 45 500 30 17 59 14 87 -7z' />
        <path d='M1215 1896 c-37 -17 -80 -62 -94 -99 -7 -17 -11 -113 -11 -233 0 -229 7 -259 72 -306 47 -33 149 -33 196 0 65 47 72 76 72 307 0 224 -5 249 -56 297 -52 48 -119 61 -179 34z' />
        <path d='M1960 1739 l0 -171 118 4 c112 3 121 5 155 31 53 40 70 79 65 147 -8 116 -72 159 -235 160 l-103 0 0 -171z' />
      </g>
    </svg>
  );
}

export default OpenSvg;
