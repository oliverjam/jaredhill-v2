const template = document.createElement("template");
// define animation styles and toggle button in JS
// since they're only used if JS runs
template.innerHTML = /*html*/ `
  <style>
    :host {
      position: relative;
    }
    
    :host button {
      --size: 2rem;
      display: none;
      position: absolute;
      right: 0;
      bottom: 0;
      width: var(--size);
      height: var(--size);
      padding: 0;
      background: none;
      border: 0.25rem solid transparent;
      border-radius: 50%;
      display: grid;
      place-content: center;
      color: var(--textLight);
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    :host button:focus:not(:focus-visible) {
      outline: 0;
    }
    
    :host button:focus-visible {
      outline: 0;
      border: 0.25rem solid var(--alternate);
    }

    /* button stays visible when hovered, paused or focused */
    :host(:hover) button,
    :host([state="paused"]) button,
    :host button:focus-visible {
      opacity: 1;
    }

    /* Don't allow manual scrolling whilst autoplaying */
    :host([state="playing"]) ::slotted(ul) {
      overflow: hidden !important;
    }

    /* show/hide right icon based on play state */
    :host([state="playing"]) #pause {
      display: block;
    }

    :host([state="playing"]) #play {
      display: none;
    }

    :host([state="paused"]) #pause {
      display: none;
    }

    :host([state="paused"]) #play {
      display: block;
    }
  </style>
  <slot></slot>
  <button>
    <svg
      id="pause"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title>Pause</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      id="play"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title>Play</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
`;

class AnimatedCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const motionQuery = window.matchMedia("(prefers-reduced-motion)");
    this.items = this.querySelectorAll("li");
    this.button = this.shadowRoot.querySelector("button");
    this.index = 0;

    const checkMotion = () => {
      this.state = motionQuery.matches ? "paused" : "playing";
    };
    checkMotion();
    motionQuery.addEventListener("change", checkMotion);

    this.button.addEventListener("click", () => {
      this.state = this.state === "playing" ? "paused" : "playing";
    });
  }

  static get observedAttributes() {
    return ["state"];
  }

  set state(value) {
    this.setAttribute("state", value);
  }

  get state() {
    return this.getAttribute("state");
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "state") {
      switch (newValue) {
        case "playing":
          return this.play();
        case "paused":
          return this.pause();
      }
    }
  }

  play() {
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.items.length;
      this.items[this.index].scrollIntoView({ block: "nearest" });
    }, 4000);
  }

  pause() {
    clearInterval(this.interval);
  }

  disconnectedCallback() {
    this.pause();
  }
}

customElements.define("animated-carousel", AnimatedCarousel);
