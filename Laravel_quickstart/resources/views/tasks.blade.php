@extends('layouts.app')
@section('content')
<div class="container">
    <div class="col-sm-offset-2 col-sm-8">
        <div class="panel panel-default">
            <div class="panel-heading">
                New Tasks
            </div>

            <div class="panel-body">
                <!-- Display Validation Errors -->
                @include('common.errors')

                <!-- New Task Form -->
                <form action="{{ url('task') }}" class="horizontal" method="POST">
                    {{ csrf_field() }}

                    <!-- Task Name -->
                    <div class="form-group">
                        <label for="task-name" class="col-sm-3 control-label">Task</label>
                        <div class="col-sm-6">
                            <input type="text" id="task-name" class="form-control" name="name">
                        </div>
                    </div>

                    <!-- Add-Task Button -->
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-6">
                            <button type="submit" class="btn btn-default">
                                <i class="fa fa-btn fa-plus"></i>Add Tasks
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <!-- TODO:Current Tasks -->
        @if (count($tasks)>0) 
            <div class="panel panel-default">
                <div class="panel-heading">
                    Current Tasks
                </div>
                <div class="panel-body">
                    <div class="table table-striped task-table">
                        <thead>
                            <th>Task</th>
                            <th>&nbsp;</th>
                        </thead>
                        <tbody>
                            @foreach ($tasks as $task)
                                <tr>
                                    <td class="table-text"><div>{{ $task->name }}</div></td>
                                    <td>
                                        <form action="{{ url('task/'.$task->id) }}" method="POST">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                        <button class="btn btn-danger">
                                            <i class="fa fa-trash"></i>Delete
                                        </button>
                                        </form>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </div>
                </div>
            </div>

            
        @endif


    </div>
</div>
@endsection