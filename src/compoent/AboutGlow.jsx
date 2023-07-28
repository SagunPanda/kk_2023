const AboutGlow = () => {
  return (
    <div className="about-glow-container">
      <svg
        width="400"
        height="514"
        viewBox="0 0 400 514"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="about-glow-svg"
      >
        <rect
          opacity="0.2"
          width="444.844"
          height="1"
          transform="matrix(0.623706 -0.781659 -0.781659 -0.623706 186.681 409.34)"
          fill="white"
        />
        <rect
          opacity="0.2"
          width="444.844"
          height="1"
          transform="matrix(0.623706 -0.781659 -0.781659 -0.623706 163.681 390.34)"
          fill="white"
        />
        <g filter="url(#filter0_f_63_47)">
          <ellipse
            cx="286.48"
            cy="256.811"
            rx="88.4335"
            ry="226.287"
            transform="rotate(51.7693 286.48 256.811)"
            fill="#5DF5FF"
            fill-opacity="0.15"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_63_47"
            x="0.442383"
            y="0.459473"
            width="572.075"
            height="512.703"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_63_47"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AboutGlow;
