import React, {Component} from 'react';
// import './App.css';
import {SuccessAlert, ErrorAlert, InfoAlert, WarningAlert} from 'pivotal-ui/react/alerts';
import 'pivotal-ui/css/alignment'
import 'pivotal-ui/css/tables'
import {Autocomplete} from "pivotal-ui/react/autocomplete";
import {BackToTop} from "pivotal-ui/react/back-to-top";
import 'pivotal-ui/css/border';
import 'pivotal-ui/css/box-shadows';
import * as ButtonGroup from 'pivotal-ui/css/button-group';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import {CheckboxDropdown} from 'pivotal-ui/react/checkbox-dropdown';
import {Checkbox} from 'pivotal-ui/react/checkbox';
import 'pivotal-ui/css/code';
import 'pivotal-ui/js/prismjs';

class App extends Component {

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const callback = () => alert('Dismissed!');

    const onPick = item => alert('You selected ' + item.value);
    const onInitializeItems = callback => callback(['foo', 'food', 'bar']);
    const AutocompleteExample = () => <Autocomplete onInitializeItems={onInitializeItems} onPick={onPick}/>;

    const codeStuff = `    class Foo
      def bar
        puts 'hi'
      end
    end`;
    return (
      <div className="App maxl">
        <span id="AppID"/>
        <div>
          <div>
            <SuccessAlert>Everything is wonderful</SuccessAlert>
            <InfoAlert>Here's some information for you</InfoAlert>
            <WarningAlert>There is no parking on the dancefloor</WarningAlert>
            <ErrorAlert>Something has gone horribly awry</ErrorAlert>
          </div>

          <div>
            <InfoAlert>
              <h5 className="em-high mtn">You should know...</h5>
              <p>There are some things you should note. Just in case you didn't figure it out already.</p>
              <ul>
                <li>thing 1</li>
                <li>thing 2</li>
              </ul>
            </InfoAlert>
          </div>
          <div>
            <SuccessAlert withIcon>success</SuccessAlert>

            <InfoAlert withIcon>info</InfoAlert>

            <WarningAlert withIcon>warning</WarningAlert>

            <ErrorAlert withIcon>error</ErrorAlert>
          </div>

          <InfoAlert onDismiss={callback} dismissable>with callback</InfoAlert>

        </div>

        <div>
          <p className="txt-l"><code>.txt-l</code></p>
          <p className="txt-c"><code>.txt-c</code></p>
          <p className="txt-r"><code>.txt-r</code></p>
        </div>

        <table className="table table-bordered">
          <tbody>
          <tr>
            <th width="40%">
              This long text is used to expand the height of this
              table so that we can demonstrate our verticle alignment classes
              to the right.
            </th>
            <td className="txt-t" width="20%">
              <code>.txt-t</code>
            </td>
            <td className="txt-m" width="20%">
              <code>.txt-m</code>
            </td>
            <td className="txt-b" width="20%">
              <code>.txt-b</code>
            </td>
          </tr>
          </tbody>
        </table>


        <div>
          <AutocompleteExample/>
        </div>


        <div>
          <BackToTop alwaysVisible scrollableId="AppID"/>
        </div>

        <div>
          <div className="border">.border</div>
        </div>
        <div>
          <div className="border-top mvxl">.border-top</div>
        </div>
        <div>
          <div className="border-right mvxl">.border-right</div>
        </div>
        <div>
          <div className="border-bottom mvxl">.border-bottom</div>
        </div>
        <div>
          <div className="border-left mvxl">.border-left</div>
        </div>


        <div>
          <table className="border">
            <thead>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three</td>
              <td>four</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border-bottom">.border-bottom</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="border">.border</td>
              <td></td>

            </tr>
            <tr>
              <td className="border-right">.border-right</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="border-top">.border-top</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-left">.border-left</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>


        <div>
          <div className="border mvxl border-none">.border-none</div>
        </div>

        <div>
          <div className="border mvxl border-top-0">.border-top-0</div>
        </div>

        <div>
          <div className="border mvxl border-right-0">.border-right-0</div>
        </div>

        <div>
          <div className="border mvxl border-bottom-0">.border-bottom-0</div>
        </div>

        <div>
          <div className="border mvxl border-left-0">.border-left-0</div>
        </div>


        <div className="panel bg-neutral-11 border border-rounded">
          <div className="panel-body">
            Border Rounded
          </div>
        </div>

        <div className="panel bg-neutral-11 border border-not-rounded">
          <div className="panel-body">
            Border Not Rounded
          </div>
        </div>


        <div className="txt-c" style={{display: "flex"}}>
          <div className="maxl paxl box-shadow-key-1" style={{width: "33%"}}><code>.box-shadow-key-1</code></div>
          <div className="maxl paxl box-shadow-amb-1" style={{width: "33%"}}><code>.box-shadow-amb-1</code></div>
          <div className="maxl paxl box-shadow-1" style={{width: "33%"}}><code>.box-shadow-1</code></div>
        </div>
        <div className="txt-c" style={{display: "flex"}}>
          <div className="maxl paxl box-shadow-key-2" style={{width: "33%"}}><code>.box-shadow-key-2</code></div>
          <div className="maxl paxl box-shadow-amb-2" style={{width: "33%"}}><code>.box-shadow-amb-2</code></div>
          <div className="maxl paxl box-shadow-2" style={{width: "33%"}}><code>.box-shadow-2</code></div>
        </div>
        <div className="txt-c" style={{display: "flex"}}>
          <div className="maxl paxl box-shadow-key-3" style={{width: "33%"}}><code>.box-shadow-key-3</code></div>
          <div className="maxl paxl box-shadow-amb-3" style={{width: "33%"}}><code>.box-shadow-amb-3</code></div>
          <div className="maxl paxl box-shadow-3" style={{width: "33%"}}><code>.box-shadow-3</code></div>
        </div>

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default-alt">Left</button>
          <button type="button" className="btn btn-default-alt">Middle</button>
          <button type="button" className="btn btn-default-alt">Right</button>
        </div>

        <br/>

        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default-alt">Left</button>
          <button type="button" className="btn btn-default">Middle</button>
          <button type="button" className="btn btn-default-alt">Right</button>
        </div>
        <br/>

        <div className="btn-group-flat" role="group" aria-label="...">
          <button type="button" className="btn">Left</button>
          <button type="button" className="btn">Middle</button>
          <button type="button" className="btn btn-default">Right</button>
        </div>

        <div>
          <DefaultButton>Default</DefaultButton>
          <DefaultButton alt>Default Alt</DefaultButton>
          <DefaultButton flat>Default Flat</DefaultButton>
        </div>

        <br/>

        <div>
          <DefaultButton>
            Button
          </DefaultButton>

          <DefaultButton href="http://example.com">
            Link
          </DefaultButton>
        </div>

        <div>
          <DefaultButton large>
            Big Button
          </DefaultButton>
          <DefaultButton>
            Default
          </DefaultButton>
          <DefaultButton small>
            Small Button
          </DefaultButton>
        </div>

        <DefaultButton fullWidth>
          Full Width Button
        </DefaultButton>

        <br/>
        <br/>

        <div>
          <DefaultButton disabled>
            Disabled Functionally
          </DefaultButton>

          <DefaultButton className="disabled">
            Disabled Functionally
          </DefaultButton>

          <DefaultButton alt className="disabled">
            Alt Disabled
          </DefaultButton>

          <DefaultButton flat className="disabled">
            Flat Disabled
          </DefaultButton>

          <PrimaryButton className="disabled">
            Primary Disabled
          </PrimaryButton>
        </div>

        <div>
          <PrimaryButton icon={<Icon src="add"/>}>
            Some button
          </PrimaryButton>
          <DefaultButton alt icon={<Icon src="spinner-sm"/>}>
            Loading
          </DefaultButton>
          <DefaultButton alt iconOnly>
            <Icon src="add"/>
          </DefaultButton>
        </div>

        <CheckboxDropdown {...{
          labels: ['DEBUG', 'WARNING', 'ERROR']
        }} />

        <div>
          <Checkbox>Checkbox one</Checkbox>
          <Checkbox disabled>Checkbox two (disabled)</Checkbox>
        </div>

        <pre>
          <code class="language-ruby">
          {codeStuff}
          </code>
        </pre>

      </div>
    );
  }
}

export default App;
