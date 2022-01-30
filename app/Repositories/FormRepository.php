<?php

namespace App\Repositories;

use App\Models\Form;

class FormRepository implements Repository {
     public function __construct(Form $form)
     {
          $this->form = $form;
     }

     public function create($data)
     {
          return $this->form->create($data);
     }
}