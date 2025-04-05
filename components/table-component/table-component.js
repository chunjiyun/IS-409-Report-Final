new gridjs.Grid({
  columns: [
    { name: "Step", width: '100px', formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
    { name: "Process", width: '200px' },
    { name: "Description", width: '400px' }
  ],
  data: [
    ["1", "Mold Preparation", "The mold of the desired shape should be compatible with the curing temperature, which can go as high as 180 ℃, depending on the autoclave. The surface of the mold should be clean and smooth."],
    ["2", "Lay-up", "The prepreg plies are cut to the desired shapes and sizes according to the mold. They are partly cured, so it is sticky and it can be stuck on the mold directly in desired orientation. Between the layers, gentle pressure should be applied to remove any trapped air bubbles."],
    ["3", "Vacuum Bagging",
      gridjs.html(`
            <div style="background-color: lightblue;">
              <p style="font-size: 1rem; text-align:left">After prepreg sheets are laid up on the mold, auxiliary vacuum bagging materials like release film and breather fabric are placed on top of the prepreg lay-up. Then, vacuum bagging film is used to create a vacuum bag and enclose the assembly in a sealed environment.</p>
            </div>
          `)],
    ["4", "Applying Vacuum",
      gridjs.html(`
            <div style="background-color: lightblue;">
              <p style="font-size: 1rem; text-align:left">The vacuum pump sucks out the air inside the vacuum bag. The pressure difference between the inside of the bag and outside, which is the atmospheric pressure, makes the vacuum bag compress tightly around the prepreg layup that is inside the bag.</p>
            </div>
          `)],
    ["5", "Curing", "The vacuum-sealed prepreg is placed inside a high-temperature autoclave (similar to an oven). This fully cures the resin, bonding the carbon fiber layers together."],
    ["6", "Demolding", "When the curing is complete and the prepreg assembly is cooled down, it is taken out of the vacuum bag and other materials are removed and demolded."],
  ],
}).render(document.getElementById("table-1"));

new gridjs.Grid({
  columns: [
    { name: "", formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
    { name: "Conventional Vacuum Bagging Film", width: '350px' },
    { name: "Sealant Tape", width: '300px' }
  ],
  data: [
    ["Product Name",
      gridjs.html(`
        <div style="text-align: center;">
          <p style="font-size: 1rem;">Airtech Stretchlon Bagging Film SL850</p>
          <img src="assets/bagging-film.png" alt="Bagging Film" style="width:200px; height:200px;">
        </div>
      `),
      gridjs.html(`
        <div style="text-align: center;">
          <p style="font-size: 1rem;">Airtech Sealant Tape <br/>AT-200Y</p>
          <img src="assets/sealant-tape.png" alt="Bagging Film" style="width:200px; height:200px;">
        </div>
      `)],
    ["Price Per Roll (SGD)", "$1592", "$5.47"],
    ["Dimensions", gridjs.html(`
        <div>
          <p style="font-size: 1rem;">Length: 304m<br/>Width: 1.22m<br/>Thickness: 0.0508mm</p>
        </div>
      `), "7.62m per roll"],
    ["Elongation", "450%", "N/A"],
    ["Material", "Nylon", "Synthetic Rubber"]
  ],
}).render(document.getElementById("table-2"));

new gridjs.Grid({
  columns: [
    { name: "Material Properties", width: '250px' },
    {
      name: 'SL850 Nylon Benchmark',
      wdith: '300px',
      formatter: (cell) => gridjs.html(`<div style="font-weight: bold;">${cell}</div>`)
    },
    { name: "Rubber", width: '200px' },
    { name: "Silicone", width: '200px' },
    { name: "Polyurethane", width: '200px' }

  ],
  data: [
    ["Temperature", "204°C", "82°C", "315°C", "93°C"],
    ["Elongation", "450%", "Up to 1000%", "Up to 1490%", "Up to 60%"],
    ["Durability", "Single-use", "Low", "High", "Low"]
  ],
}).render(document.getElementById("table-3"));

new gridjs.Grid({
  columns: [
    { name: "Silicone Specimen Thickness (mm)", width: '350px' },
    { name: "Elongation At Break (mm) ", width: '300px' },
    { name: "Elongation Rate (%)", width: '300px' },
    { name: "Tensile Strength (kN)", width: '300px' }
  ],
  data: [
    ["0.2", "167", "668", "0.0066"],
    ["0.5", "301", "1200", "0.026433"],
    ["1.2", "190", "760", "0.0324"],
    ["2.0", "179", "716", "0.06055"]
  ],
}).render(document.getElementById("table-4"));

new gridjs.Grid({
  columns: [
    { name: "Design Statement", width: '350px' },
    { name: "Specifications", width: '300px' }
  ],
  data: [
    ["Top frame and bottom frame", gridjs.html(`<div><p style="font-size: 1rem;">Outer dimension: 44cm x 44cm<br/>Inner dimension: 38cm x 38cm<br/>3mm thick aluminium plate bolted on the bottom frame.</p></div>`)],
    ["Silicone placement (Challenge 1)", "Silicone is fixed on the bottom side of the upper frame using 4 aluminium gusset elements for every side, excluding the hinge side. Total of 12 gusset elements are used."],
    ["Vacuum Port Placement (Challenge 2)", gridjs.html(`<div><p style="font-size: 1rem;">It is located at the bottom corner of the aluminium plate.<br/>A hole is drilled into the aluminium plate to fit the vacuum port.</p></div>`)],
    ["4 Legs", "The four legs elevate up the entire frame assembly so that there is space for the vacuum hose."],
  ],
}).render(document.getElementById("table-7"));

new gridjs.Grid({
  columns: [
    { name: "Table No", width: '100px', formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
    { name: "Title/Description", width: '300px' },
  ],
  data: [
    ["1", "Breakdown of the Prepreg Processing Steps"],
    ["2", "Specifications of Vacuum Bagging Film and Sealant Tape Purchased by NUS"],
    ["3", "Comparative Material Properties of SL850, Rubber, Silicone, and Polyurethane"],
    ["4", "Average Elongation at Break and Tensile Strength for Different Silicone Thicknesses"],
    ["5", "Vacuum Bagging Layouts: Traditional vs. Silicone Vacuum Bagging System"],
    ["6", "Two Possible Ideas to Address Sealing Problem"],
    ["7", "Design Specifications of the Proposed Vacuum Bagging System"],
    ["8", "Recorded Edge Radius Data as Illustrated in Figure 31"],
    ["9", "Measured Radii of Pre-Cure and Final Composite Parts"],
    ["10", "Reduction in Mass When Shifting from 3D Printed ABS to Prepreg"],
  ],
}).render(document.getElementById("table-table"));

new gridjs.Grid({
  columns: [
    { name: "Figure No", width: '100px', formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
    { name: "Title/Description", width: '300px' },
  ],
  data: [
    ["1", "Composition of Composite Materials and Real-Life Application"],
    ["2", "Growing Market Value of Composite Materials Worldwide"],
    ["3", "Composite Material Applications Worldwide"],
    ["4", "Real-life Application of Composite Material"],
    ["5", "Automated Fiber Placement Machine in Industrial Use"],
    ["6", "Front Wing Made With Prepreg by NUS Formula SAE Team"],
    ["7", "Wet Lay-Up"],
    ["8", "Resin Transfer Molding"],
    ["9", "Prepreg"],
    ["10", "Simplified Diagram of a Prepreg Lay-Up in a Vacuum Bag"],
    ["11", "Real-life Prepreg Lay-Up Inside a Vacuum Bag"],
    ["12", "Silicones in RS Components"],
    ["13", "Purchased Silicones on Aliexpress"],
    ["14", "CAD Drawing of the ASTM D412 Dogbone Specimen"],
    ["15", "Acrylic Template of Dogbone Specimens"],
    ["16", "Silicone Specimens"],
    ["17", "Video Footage of a Silicone Specimen Elongating Until Breaking"],
    ["18", "Combined Scatter Plot for All Silicone Specimens"],
    ["19", "Vacuum Hose Location in Traditional Layout"],
    ["20", "Vacuum Forming Machine"],
    ["21", "Final Concept Design of the Silicone Vacuum Bagging System"],
    ["22", "Clamping Silicone on the Upper Frame"],
    ["23", "Vacuum Port Location"],
    ["24", "Fully Assembled Vacuum Bagging System With Silicone Sheet"],
    ["25", "Vacuuming a Roll of Tape (Representing a Female Mold)"],
    ["26", "Test 2: Vacuuming a Rectangular Block"],
    ["27", "15 cm Cube Unable to Close Frames"],
    ["28", "10 cm Cube Under Vacuum Forming a Radius"],
    ["29", "8.5 cm Cube Under Vacuum Forming a Radius"],
    ["30", "5 cm Cube Under Vacuum Radius"],
    ["31", "Measuring the Radius on the Edges"],
    ["32", "Scatter Plot of Green Length Against Original Cube Height"],
    ["33", "Heel Rest Component"],
    ["34", "Brake Heel Rest Component"],
    ["35", "Heel Rest Revised as a Male Mold"],
    ["36", "Brake Heel Rest Revised as a Male Mold"],
    ["37", "Annotated Mold Diagram for Brake Heel Rest (Green = Retained, Red = Trimmed)"],
    ["38", "3D Printed Molds for Heel Rest and Brake Heel Rest"],
    ["39", "Prepreg Lay-Up for Heel Rest and Brake Heel Rest (Pre-Cure)"],
    ["40", "Demolded Lay-Up After Curing for 6 Hours"],
    ["41", "Edge Radius Measurement for Final Composite Part"],
  ],
}).render(document.getElementById("table-figure"));



class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
