import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRole } from '../../stores/reducers/role.reducer';
import { v4 as uuidv4 } from 'uuid';
function AddRole(props) {
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState("1");
    const dispatch = useDispatch();

    function handleSubmitForm(e) {
        e.preventDefault();
        dispatch(addRole({
            id: uuidv4(),
            name,
            isActive: isActive === "1" ? true : false
        }));

        setName("");
        setIsActive("1");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    function onOptionChange(e) {
        setIsActive(e.target.value)
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmitForm}>
                <div className='form-group row'>
                    <label for="colFormLabelSm" className="col-w-20">Name</label>
                    <div className="col-w-80">
                        <input
                            value={name}
                            onChange={handleChange}
                            id="colFormLabelSm"
                            type="text" />
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                        <legend className="col-w-20">Is Active</legend>
                        <div className="col-w-80">
                            <div class="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isActive"
                                    id="gridRadios1"
                                    value="1"
                                    checked={isActive === "1"}
                                    onChange={onOptionChange}
                                />
                                <label className="form-check-label" for="gridRadios1">
                                    active
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isActive"
                                    id="gridRadios2"
                                    value="0"
                                    onChange={onOptionChange}
                                    checked={isActive === "0"}
                                />
                                <label className="form-check-label" for="gridRadios2">
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