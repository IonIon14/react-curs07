import React from 'react'
import Layout from "../../components/Layout";
import './Terms.css'
import {Form} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class Terms extends React.Component {
    render() {
        return (
            <Layout>
                <div className="terms-and-conditions">
                    <div className="container-fluid mt-5 terms-div">
                        <div className="row">
                            <div id="primary" className="col-sm-12">
                                <main id="blog" className="site-main blog-main">
                                    <article id="post-44364"
                                             className="post-44364 page type-page status-publish hentry">
                                        <div className="content-area">
                                            <header className="entry-header">
                                                <h1 className="entry-title">Terms &amp; Conditions</h1></header>

                                            <div className="entry-content">
                                                <h3><span>Limitation of Liability</span></h3>
                                                <p><span>The bootstrap themes shall not be held accountable for any direct, indirect, special, accidental or considerable damages that includes but not bound to, loss of data or profit caused due to use or inability to use the products that we provide under any circumstances, even if the bootstrap themes or legit representative has been considered the possibility of such damages. You are soley held responsible of any costs caused, if your use of materials from this site results in the need for servicing, repair or correction of equipment or data.</span>
                                                </p>
                                                <h3><span>Licensing Policy</span></h3>
                                                <p><span>The Bootstrap themes are released under the GNU General Public License v2 or later.&nbsp;</span><span
                                                >You can use all our themes for personal and commercial use.&nbsp;</span><span
                                                >Please go through the </span><a
                                                    href="https://thebootstrapthemes.com/licensing-policy/"><span
                                                >licensing policy page</span></a><span
                                                > for licensing details.</span></p>
                                                <h3><span>Product Compatibility</span></h3>
                                                <ol>
                                                    <li><strong>WordPress Themes:</strong><span
                                                    >
</span><span>The products are developed to be compatible with the latest version of WordPress because we always strive to stay up-to-date with the latest version of WordPress. You might experience certain performance or functionality glitches with the products if you use any version prior to that.</span>
                                                    </li>
                                                    <li><strong>HTML Themes:</strong><span
                                                    >
</span><span>The products designed are developed possess static features. Whereas, in need of forms or any other dynamic features, you will have to code as per your product requirement.</span>
                                                    </li>
                                                </ol>
                                                <h3><span>Delivery</span></h3>
                                                <p><span>Any kind of information related to your purchased product(s) will be emailed to the email address that you have provided once we receive your payment. This process usually takes few minutes, but for some issue might get extended to 24 hours. In case you do not receive your email up to the allocated time period, you can contact us through our contact page. Also, you can access the products that you have purchased from your account in the bootstrap theme after logging in.</span>
                                                </p>
                                                <h3><span>Ownership</span></h3>
                                                <p><span>The Bootstrap Themes claims ownership on all of its products. Hence, you may not demand your any kind of proprietorship over any of our products, modified or unmodified. We provide our products without any warranty, as it is. You cannot hold our legit person accountable to any kind of damage including, but not limited to direct, indirect, special, incidental or consequential damages or other losses caused due to inefficiency in using our products.</span>
                                                </p>
                                                <h3><span>Browser Compatibility</span></h3>
                                                <p><span>We are solely concerned with providing the best possible quality in products to our users. Thus, we make it sure that our themes and templates are compatible across most major browsers including the latest version of modern web browsers such as Safari, Firefox, Internet explorer 9+ and Chrome.</span>
                                                </p>
                                                <h3><span>Updates</span></h3>
                                                <p><span>We provide our license holders who have an active and valid subscription and licence key with one click updates. As long as the license key generated from the purchase is valid and active, you can get access to the updates. We have provision of updates for a 1 year time period.</span>
                                                </p>
                                                <p><span>We advise you to constantly get updated with the current version of our themes for your usage. Since, we constantly update our themes to be compatible with the latest version of WordPress.</span>
                                                </p>
                                                <h3><span>Theme Support</span></h3>
                                                <p><span>Please go through to </span><a
                                                    href="https://thebootstrapthemes.com/help-support-policy/"><span
                                                >Help and Support Policy page</span></a><span
                                                > for further details.</span></p>
                                                <h3><span>Price Changes</span></h3>
                                                <p><span>Please be informed that it is our sole right to modify or disallow, permanently or temporarily a subscription at any point of time and from time to time with or without any prior notice.</span>
                                                </p>
                                                <h3><span>Refund Policy</span></h3>
                                                <p><span>Please go through to </span><a
                                                    href="https://thebootstrapthemes.com/refund-policy/"><span
                                                >Refund Policy page</span></a><span
                                                > for further details.</span></p>
                                                <h3><span>Email</span></h3>
                                                <p><span>We occasionally send you emails concerned with the purchase of the product(s) from our company. We also send you email newsletters concerning the WordPress and bootstrap themes promotions and updates. We assure you that we do not sell or release your email to any third party vendors. You may withdraw your emails at any time without fine or penalty. </span>
                                                </p>
                                                <h3><span>License Agreement:</span></h3>
                                                <p><span>We believe that you have provided your full consent and read and agreed to the Terms and Conditions mentioned and explained on this page while purchasing our product(s). We hold the right to change or modify the present Terms and Conditions solely without any prior consent or notice.</span>
                                                </p>
                                                <h3><span>Severability</span></h3>
                                                <p><span>If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </div>
                        </div>
                        <Form>
                            <Form.Group controlId="formBasicCheckbox" className="row d-flex justify-content-start mt-2">
                                <Form.Check type="checkbox" className="ml-3"/>
                                <p className="ml-1"><strong>I agree with the terms and conditions</strong></p>
                            </Form.Group>
                            <Link to ="/">
                                <Button variant="primary" type="submit" className="mb-4 btn-block">
                                    Submit
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Terms;