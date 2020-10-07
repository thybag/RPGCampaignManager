<?php

namespace Tests;

abstract class ModelTestCase extends TestCase
{
    protected $model;

    protected function runConfigurationAssertions(
        $table = null,
        $fillable = [],
        $hidden = [],
        $guarded = ['*'],
        $visible = [],
        $dates = ['created_at', 'updated_at'],
        $primaryKey = 'id'
    ) {
        $this->assertEquals($fillable, $this->model->getFillable());
        $this->assertEquals($guarded, $this->model->getGuarded());
        $this->assertEquals($hidden, $this->model->getHidden());
        $this->assertEquals($visible, $this->model->getVisible());
        $this->assertEquals($dates, array_values(array_diff($this->model->getDates(), ['deleted_at', 'banned_at'])));
        $this->assertEquals($primaryKey, $this->model->getKeyName());
        $this->assertEquals($table, $this->model->getTable());
    }
}
