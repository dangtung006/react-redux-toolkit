import React from 'react';
import "./form.css";
function AddRole(props) {
    return (
        <div className='form-wrapper'>
            <form>
                <div className='form-group row'>
                    <label for="colFormLabelSm" className="col-w-20">Name</label>
                    <div className="col-w-80">
                        <input id="colFormLabelSm" type="text" />
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-w-20">Is Active</legend>
                        <div class="col-w-80">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label class="form-check-label" for="gridRadios1">
                                    active
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    inactive
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className='form-group row'>
                    <div className="col-w-80">
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddRole;