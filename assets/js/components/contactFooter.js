class ContactFooter extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
              <style>
                footer {
                	background-color: #333;
                	color: #FFF;
                	padding: 0 20px;
                	margin-top: 10px;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                }

                footer div {
                    text-align: right;
                }

                footer address:last-child {
                	margin-bottom: 0;
                }
              </style>
              <footer>
                <address>
                    <h3>
                        Bring life to your project! <br/>
                        <small>Talk to us.</small>
                    </h3>
                    <strong>TopCasaFina Building Design</strong><br>
                    <strong>E-mail:</strong> contact.topcasafina@vim.alura.com.br <br />
                    <strong>Phone:</strong> 15-99177-5566<br />
                    <strong>Pager:</strong> 8468465219<br />
                    <strong>Fax:</strong> +44-12-45678912<br />
                </address>
                <div>
                    <h3>Suppliers && Partners</h3>
                    TopMassa Fina Constructions<br />
                    Peter's Cements <br />
                    Simão Planed Furnitures<br />
                </div>
              </footer>
        `;

        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('contact-footer', ContactFooter);
