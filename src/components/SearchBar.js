import React, { Fragment } from "react";
import Button from "@atlaskit/button";
import Form, { Field, FormFooter} from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import './SearchBar.css';

export class SearchBar extends React.Component {
    render() {
        return (
            <Form
              onSubmit={(formState: unknown) =>
                console.log("form submitted", formState)
              }
            >
              {({ formProps }: any) => (
                <form {...formProps} className="searchBar">
                  <Field name="example-text">
                    {({ fieldProps }: any) => (
                      <Fragment>
                        <Textfield {...fieldProps} />
                      </Fragment>
                    )}
                  </Field>
                  <FormFooter>
                    <Button type="submit" appearance="primary" className="searchButton">
                      Submit
                    </Button>
                  </FormFooter>
                </form>
              )}
            </Form>
        );
    }
  }

export default SearchBar;


